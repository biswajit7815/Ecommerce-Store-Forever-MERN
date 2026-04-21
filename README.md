<div align="center">

# 🛍️ Ecommerce-Store-Forever-MERN

### Production-Ready · 3-Tier MERN Stack · Fully Dockerized · EC2 Deployed

![Live](https://img.shields.io/badge/Status-Live%20%F0%9F%9F%A2-brightgreen?style=flat-square)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=flat-square&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-Reverse%20Proxy-009639?style=flat-square&logo=nginx&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-Backend-339933?style=flat-square&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=flat-square&logo=react&logoColor=black)

> A production-grade E-commerce platform built with MERN, secured with Nginx, and deployed on AWS EC2 via Docker.

### 🌐 [Live Demo → http://3.111.213.122/](http://3.111.213.122/)

</div>

---

## 🏛️ Architecture

```text
                 ┌───────────────────────────────┐
                 │        User / Admin           │
                 │          Browser              │
                 └──────────────┬────────────────┘
                                │ HTTP (Port 80/443)
                                ▼
                 ┌───────────────────────────────┐
                 │       🌐  Nginx Reverse Proxy │
                 │    Single Entry Point & SSL   │
                 └────┬──────────┬───────────┬───┘
                      │ /        │ /api      │ /admin
                      ▼          ▼           ▼
           ┌──────────────┐ ┌──────────┐ ┌──────────────┐
           │  🖥 Frontend  │ │ ⚙ Backend│ │ 🛠 Admin Panel│
           │  (React)     │ │ (Node)   │ │  (React)     │
           └──────────────┘ └────┬─────┘ └──────────────┘
                                 │
                                 ▼
                     ┌─────────────────────────┐
                     │     🗄 MongoDB Atlas    │
                     │  (Cloud Managed DB)     │
                     └─────────────────────────┘

```
```
Layer,Technology,Role
Frontend,React.js,User-facing SPA
Admin,React.js,Admin Management Dashboard
Backend,Node.js + Express,REST API Server
Database,MongoDB Atlas,NoSQL Cloud Storage
Proxy,Nginx,Reverse Proxy & Routing
Container,Docker,Services Isolation
```

```
Ecommerce-Store-Forever-MERN/
├── 📂 admin/            # Admin Dashboard (React)
├── 📂 backend/          # Node.js Express API
├── 📂 frontend/         # Customer Frontend (React)
├── 📂 nginx/            # Nginx Proxy Configuration
├── 📄 docker-compose.yml # Infrastructure Orchestration
└── 📄 .env              # Environment Variables

```

🐳 Docker Setup
Deploy in Production
```
# Clone the repository
git clone [https://github.com/biswajit7815/Ecommerce-Store-Forever-MERN.git](https://github.com/biswajit7815/Ecommerce-Store-Forever-MERN.git)

# Build and start services
docker-compose up -d --build
```

🔐 Environment Variables
```
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_SECRET_KEY=your_secret
STRIPE_SECRET=your_stripe_key
PORT=3000

```

