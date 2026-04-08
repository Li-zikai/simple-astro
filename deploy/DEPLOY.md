# GameMac Helm 部署文档

## 前置条件

- Kubernetes 集群已就绪
- 已安装 Helm 3.x
- 已安装阿里云 ALB Ingress Controller
- Docker 镜像已构建并推送至仓库

---

## 1. 构建镜像

```bash
# 默认读取 deploy/version.txt，并自动递增补丁版本
bash deploy/build.sh

# 指定版本号构建
bash deploy/build.sh 1.1.4
```

镜像地址：`gamesirnanjing.asuscomm.com:5000/gamehub/gamemac:<版本号>`

版本文件：`deploy/version.txt`

- 文件记录“上次成功构建并推送”的版本号
- 不传参数执行 `bash deploy/build.sh` 时，会自动将补丁版本 `+1`
- 传入显式版本时（例如 `bash deploy/build.sh 1.1.4`），成功后也会写回版本文件
- 只有镜像构建和推送都成功后，版本文件才会更新

---

## 2. 推荐部署步骤

```bash
# 1. 进入项目根目录
cd /path/to/gamemac

# 2. 自动生成下一个版本并构建推送
bash deploy/build.sh

# 3. 首次安装或升级到新版本
helm upgrade --install gamemac ./helm/gamemac -n gamehub --create-namespace \
  --set image.tag="<上一步输出的版本号>"

# 4. 检查部署结果
kubectl get pods -n gamehub -l app.kubernetes.io/name=gamemac
kubectl get svc -n gamehub -l app.kubernetes.io/name=gamemac
kubectl get ingress -n gamehub -l app.kubernetes.io/name=gamemac
```

---

## 3. Helm 安装

### 首次安装

```bash
# 进入项目根目录
cd /path/to/gamemac

# 使用默认配置安装
helm install gamemac ./helm/gamemac -n gamehub --create-namespace

# 指定命名空间安装
helm install gamemac ./helm/gamemac -n gamehub --create-namespace
```

### 自定义参数安装

```bash
# 自定义镜像版本
helm install gamemac ./helm/gamemac -n gamehub --create-namespace \
  --set image.tag="1.1.4"

# 自定义副本数和域名
helm install gamemac ./helm/gamemac -n gamehub --create-namespace \
  --set replicaCount=3 \
  --set ingress.hosts[0].host=gamemac.com

# 自定义资源限制
helm install gamemac ./helm/gamemac -n gamehub --create-namespace \
  --set resources.limits.cpu=500m \
  --set resources.limits.memory=512Mi \
  --set resources.requests.cpu=200m \
  --set resources.requests.memory=256Mi
```

### 使用自定义 values 文件安装

```bash
# 创建自定义配置文件 (例如 values-prod.yaml)
helm install gamemac ./helm/gamemac -n gamehub --create-namespace -f values-prod.yaml
```

---

## 4. Helm 升级

### 升级镜像版本

```bash
# 升级到新版本镜像
helm upgrade gamemac ./helm/gamemac -n gamehub \
  --set image.tag="1.1.4"
```

### 升级副本数

```bash
helm upgrade gamemac ./helm/gamemac -n gamehub \
  --set replicaCount=3
```

### 使用自定义 values 文件升级

```bash
helm upgrade gamemac ./helm/gamemac -n gamehub -f values-prod.yaml
```

### 升级并保留之前的自定义值

```bash
helm upgrade gamemac ./helm/gamemac -n gamehub --reuse-values \
  --set image.tag="1.1.1"
```

---

## 5. 回滚

```bash
# 查看历史版本
helm history gamemac -n gamehub

# 回滚到上一个版本
helm rollback gamemac -n gamehub

# 回滚到指定版本
helm rollback gamemac <revision> -n gamehub
```

---

## 6. 卸载

```bash
helm uninstall gamemac -n gamehub

# 指定命名空间
helm uninstall gamemac -n gamehub
```

---

## 7. 常用运维命令

```bash
# 查看部署状态
helm status gamemac -n gamehub

# 查看实际渲染的 YAML（调试用）
helm template gamemac ./helm/gamemac

# 模拟安装（不实际部署，验证配置）
helm install gamemac ./helm/gamemac -n gamehub --dry-run --debug

# 查看 Pod 状态
kubectl get pods -n gamehub -l app.kubernetes.io/name=gamemac

# 查看 Ingress 状态
kubectl get ingress -n gamehub -l app.kubernetes.io/name=gamemac

# 查看 Service 状态
kubectl get svc -n gamehub -l app.kubernetes.io/name=gamemac

# 查看 Pod 日志
kubectl logs -n gamehub -l app.kubernetes.io/name=gamemac --tail=100 -f
```

---

## 8. 默认配置参数

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `replicaCount` | `2` | 副本数 |
| `image.repository` | `gamesirnanjing.asuscomm.com:5000/gamehub/gamemac` | 镜像仓库 |
| `image.tag` | `1.1.0` | 镜像版本 |
| `image.pullPolicy` | `Always` | 镜像拉取策略 |
| `service.type` | `ClusterIP` | Service 类型 |
| `service.port` | `80` | Service 端口 |
| `ingress.enabled` | `true` | 是否启用 Ingress |
| `ingress.className` | `alb` | Ingress Class |
| `ingress.hosts[0].host` | `gamemac.com` | 域名 |
| `resources.limits.cpu` | `200m` | CPU 上限 |
| `resources.limits.memory` | `512Mi` | 内存上限 |
| `resources.requests.cpu` | `100m` | CPU 请求 |
| `resources.requests.memory` | `128Mi` | 内存请求 |

---

## 9. 完整部署流程示例

```bash
# 1. 进入项目根目录
cd /path/to/gamemac

# 2. 自动递增版本并构建推送
bash deploy/build.sh

# 3. 首次部署或升级
helm upgrade --install gamemac ./helm/gamemac -n gamehub --create-namespace \
  --set image.tag="<上一步输出的版本号>"

# 4. 验证部署
kubectl get pods -n gamehub -l app.kubernetes.io/name=gamemac
kubectl get ingress -n gamehub

# 5. 后续版本更新示例
bash deploy/build.sh
helm upgrade gamemac ./helm/gamemac -n gamehub --set image.tag="<上一步输出的版本号>"

# 6. 如需卸载
helm uninstall gamemac -n gamehub
```

