#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
VERSION_FILE="${SCRIPT_DIR}/version.txt"
CHART_DIR="${PROJECT_ROOT}/helm/gamemac"

# 镜像 / Chart 配置
REGISTRY="gamesirnanjing.asuscomm.com:5000"
IMAGE_NAME="gamehub/gamemac"
CHART_OCI_REPO="oci://${REGISTRY}/gamehub"
CHART_NAME="gamemac"

validate_version() {
  local version="$1"
  [[ "${version}" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]
}

next_patch_version() {
  local version="$1"
  local major minor patch
  IFS='.' read -r major minor patch <<< "${version}"
  echo "${major}.${minor}.$((patch + 1))"
}

# 从 Docker config 登录 Helm OCI（私有 HTTP registry）
helm_registry_login() {
  local docker_config="${DOCKER_CONFIG:-${HOME}/.docker}/config.json"
  local user pass

  if [[ ! -f "${docker_config}" ]]; then
    echo "未找到 Docker 凭据文件: ${docker_config}" >&2
    return 1
  fi

  # 输出: 第 1 行 username，第 2 行 password
  {
    read -r user
    read -r pass
  } < <(python3 - "${docker_config}" "${REGISTRY}" <<'PY'
import base64, json, sys
cfg_path, registry = sys.argv[1], sys.argv[2]
with open(cfg_path, encoding="utf-8") as f:
    cfg = json.load(f)
auth = (cfg.get("auths") or {}).get(registry, {}).get("auth")
if not auth:
    sys.exit(1)
user, _, passwd = base64.b64decode(auth).decode().partition(":")
print(user)
print(passwd)
PY
  ) || {
    echo "Docker config 中没有 ${REGISTRY} 的登录信息，请先 docker login ${REGISTRY}" >&2
    return 1
  }

  echo "${pass}" | helm registry login "${REGISTRY}" \
    --username "${user}" \
    --password-stdin \
    --plain-http
}

if [[ ! -f "${VERSION_FILE}" ]]; then
  echo "1.1.3" > "${VERSION_FILE}"
fi

CURRENT_VERSION="$(tr -d '[:space:]' < "${VERSION_FILE}")"
if ! validate_version "${CURRENT_VERSION}"; then
  echo "版本文件格式错误: ${VERSION_FILE} -> ${CURRENT_VERSION}" >&2
  exit 1
fi

if [[ $# -gt 0 ]]; then
  VERSION="$1"
  if ! validate_version "${VERSION}"; then
    echo "指定版本格式错误: ${VERSION}" >&2
    exit 1
  fi
  VERSION_SOURCE="manual"
else
  VERSION="$(next_patch_version "${CURRENT_VERSION}")"
  VERSION_SOURCE="auto"
fi

FULL_IMAGE="${REGISTRY}/${IMAGE_NAME}:${VERSION}"
CHART_REF="${CHART_OCI_REPO}/${CHART_NAME}:${VERSION}"

echo "=========================================="
echo "  构建并推送 GameMac 镜像 + Helm Chart"
echo "=========================================="
echo "镜像地址: ${FULL_IMAGE}"
echo "Chart 地址: ${CHART_REF}"
echo "版本来源: ${VERSION_SOURCE}"
echo "版本记录: ${CURRENT_VERSION} -> ${VERSION}"
echo ""

# 构建镜像
echo "[1/5] 构建 Docker 镜像..."
docker build -f "${SCRIPT_DIR}/Dockerfile" -t "${FULL_IMAGE}" "${PROJECT_ROOT}"

# 同时打上 latest 标签
docker tag "${FULL_IMAGE}" "${REGISTRY}/${IMAGE_NAME}:latest"

# 推送镜像
echo "[2/5] 推送镜像 ${FULL_IMAGE} ..."
docker push "${FULL_IMAGE}"

echo "[3/5] 推送镜像 ${REGISTRY}/${IMAGE_NAME}:latest ..."
docker push "${REGISTRY}/${IMAGE_NAME}:latest"

# 打包 Helm Chart（chart version / appVersion / image.tag 与镜像版本一致）
echo "[4/5] 打包 Helm Chart (version=${VERSION}, image.tag=${VERSION}) ..."
if [[ ! -d "${CHART_DIR}" ]]; then
  echo "Chart 目录不存在: ${CHART_DIR}" >&2
  exit 1
fi
if ! command -v helm >/dev/null 2>&1; then
  echo "未找到 helm 命令，请先安装 Helm 3.x" >&2
  exit 1
fi

STAGE_DIR="$(mktemp -d)"
PACKAGE_DIR="$(mktemp -d)"
cleanup() {
  rm -rf "${STAGE_DIR}" "${PACKAGE_DIR}"
}
trap cleanup EXIT

cp -a "${CHART_DIR}/." "${STAGE_DIR}/"

# 将打包用 values 中的 image.tag 与本次版本对齐（不改仓库内源文件）
if grep -qE '^[[:space:]]*tag:[[:space:]]*' "${STAGE_DIR}/values.yaml"; then
  sed -i -E "s/^([[:space:]]*tag:[[:space:]]*).*/\\1\"${VERSION}\"/" "${STAGE_DIR}/values.yaml"
else
  echo "values.yaml 中未找到 image.tag 字段" >&2
  exit 1
fi

helm package "${STAGE_DIR}" \
  --version "${VERSION}" \
  --app-version "${VERSION}" \
  --destination "${PACKAGE_DIR}"

CHART_TGZ="${PACKAGE_DIR}/${CHART_NAME}-${VERSION}.tgz"
if [[ ! -f "${CHART_TGZ}" ]]; then
  echo "Helm package 失败，未生成: ${CHART_TGZ}" >&2
  exit 1
fi

echo "  已生成: ${CHART_TGZ}"
echo "  Chart.yaml version/appVersion 与 image.tag = ${VERSION}"

# 推送 Helm Chart 到 OCI 仓库
echo "[5/5] 推送 Helm Chart 到 ${CHART_OCI_REPO} ..."
helm_registry_login

helm push "${CHART_TGZ}" "${CHART_OCI_REPO}" --plain-http

printf '%s\n' "${VERSION}" > "${VERSION_FILE}"

echo ""
echo "=========================================="
echo "  构建完成!"
echo "  镜像: ${FULL_IMAGE}"
echo "  Chart: ${CHART_REF}"
echo "  安装示例:"
echo "    helm upgrade --install gamemac ${CHART_OCI_REPO}/${CHART_NAME} \\"
echo "      --version ${VERSION} -n gamehub --create-namespace --plain-http"
echo "  已更新版本文件: ${VERSION_FILE}"
echo "=========================================="
