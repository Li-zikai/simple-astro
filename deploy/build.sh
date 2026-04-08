#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

# 镜像配置
REGISTRY="gamesirnanjing.asuscomm.com:5000"
IMAGE_NAME="gamehub/gamemac"
VERSION="${1:-1.0.0}"
FULL_IMAGE="${REGISTRY}/${IMAGE_NAME}:${VERSION}"

echo "=========================================="
echo "  构建并推送 GameMac 镜像"
echo "=========================================="
echo "镜像地址: ${FULL_IMAGE}"
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

echo ""
echo "=========================================="
echo "  构建完成!"
echo "  镜像: ${FULL_IMAGE}"
echo "=========================================="
