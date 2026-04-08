#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
VERSION_FILE="${SCRIPT_DIR}/version.txt"

# 镜像配置
REGISTRY="gamesirnanjing.asuscomm.com:5000"
IMAGE_NAME="gamehub/gamemac"

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

echo "=========================================="
echo "  构建并推送 GameMac 镜像"
echo "=========================================="
echo "镜像地址: ${FULL_IMAGE}"
echo "版本来源: ${VERSION_SOURCE}"
echo "版本记录: ${CURRENT_VERSION} -> ${VERSION}"
echo ""

# 构建镜像
echo "[1/3] 构建 Docker 镜像..."
docker build -f "${SCRIPT_DIR}/Dockerfile" -t "${FULL_IMAGE}" "${PROJECT_ROOT}"

# 同时打上 latest 标签
docker tag "${FULL_IMAGE}" "${REGISTRY}/${IMAGE_NAME}:latest"

# 推送镜像
echo "[2/3] 推送镜像 ${FULL_IMAGE} ..."
docker push "${FULL_IMAGE}"

echo "[3/3] 推送镜像 ${REGISTRY}/${IMAGE_NAME}:latest ..."
docker push "${REGISTRY}/${IMAGE_NAME}:latest"

printf '%s\n' "${VERSION}" > "${VERSION_FILE}"

echo ""
echo "=========================================="
echo "  构建完成!"
echo "  镜像: ${FULL_IMAGE}"
echo "  已更新版本文件: ${VERSION_FILE}"
echo "=========================================="
