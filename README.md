# 复古胶片相机租赁平台

面向摄影爱好者，提供胶片相机租赁、胶片销售和冲洗服务的摄影文化平台。

## Docker Compose 快速启动

首次启动前复制环境变量文件：

```bash
cp .env.example .env
docker compose up -d
```

访问地址：

- 前端：http://localhost:28520
- 后端健康检查：http://localhost:29520/health
- API 示例：http://localhost:28520/api/overview

## 项目主要功能

- 相机 catalog（品牌/型号/成色）：录入胶片相机信息（品牌如佳能/尼康/徕卡/禄来、型号、生产年份、成色等级、日租金），上传实物照片和样张。
- 胶片库存管理（型号/ISO/张数）：管理各型号胶卷库存（如柯达Portra 400/富士C200/伊尔福HP5），记录ISO感光度、剩余张数和有效期，与相机租赁联动推荐。
- 租赁时长与押金：用户选择相机和租赁天数（支持1天起租），系统自动计算租金和押金，归还时验收相机状态，无损退还押金，损坏按赔偿标准扣款。
- 冲洗服务预约：用户拍摄完成后可预约胶片冲洗服务（C-41彩色负片/E-6反转片/BW黑白），选择冲扫精度，系统记录冲扫进度并推送取片通知。
- 作品展示墙与点赞：用户冲扫完成后上传作品到展示墙，其他用户可浏览、点赞和收藏，优秀作品置顶推荐，营造胶片摄影社区氛围。

## 本地开发方式

前端：

```bash
cd frontend
npm install
npm run dev
```

后端：

```bash
cd backend
mvn spring-boot:run
```

## 技术栈

| 分层 | 技术 |
| --- | --- |
| 前端 | Vue 3 + TypeScript、Element Plus、Vite |
| 后端 | Spring Boot + Java |
| 数据库 | PostgreSQL |
| 认证 | JWT |
| 依赖 | JPA（Hibernate）、Maven |

## 项目目录结构

```text
.
├── backend/              # 后端服务
├── database/             # 数据库脚本
├── frontend/             # 前端应用
├── docker-compose.yml    # 一键部署编排
├── .env.example          # 环境变量示例
└── README.md
```

## 环境变量说明

| 变量 | 说明 | 默认值 |
| --- | --- | --- |
| COMPOSE_PROJECT_NAME | Compose 项目名，避免中文目录名导致项目名为空 | lpfilmcamera |
| DB_NAME | 数据库名称 | app |
| DB_USER | 数据库用户 | app |
| DB_PASSWORD | 数据库密码 | app_pwd |
| DB_ROOT_PASSWORD | 数据库 root 密码 | root_pwd |
| JWT_SECRET | JWT 签名密钥 | change_me_to_a_long_random_string |
| FRONTEND_PORT | 前端宿主机端口 | 28520 |
| BACKEND_PORT | 后端宿主机端口 | 29520 |
| DB_PORT | 数据库宿主机端口 | 5432 |

## Docker 部署说明

- 使用 `docker compose up -d` 启动，不需要额外传入 `-p`。
- `docker-compose.yml` 顶层已声明 `name: lpfilmcamera`，并且 `.env` 包含 `COMPOSE_PROJECT_NAME=lpfilmcamera`，可在中文目录名下启动。
- 数据库数据保存在命名卷 `db_data` 中，不依赖当前目录名。
- 前端容器由 Nginx 托管静态资源，并把 `/api/` 反向代理到 `backend:29520`。
- 若本地端口冲突，可修改 `.env` 中的 `FRONTEND_PORT`、`BACKEND_PORT`、`DB_PORT`。

常用命令：

```bash
docker compose config --quiet
docker compose ps
docker compose down
```

## License

MIT
