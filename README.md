<div align="center">

# 🛍️ Ecommerce-Store-Forever-MERN

### Production-Ready · 3-Tier MERN Stack · Fully Dockerized · EC2 Deployed

![Live](https://img.shields.io/badge/Status-Live%20%F0%9F%9F%A2-brightgreen?style=flat-square)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=flat-square&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-Reverse%20Proxy-009639?style=flat-square&logo=nginx&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-Backend-339933?style=flat-square&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=flat-square&logo=react&logoColor=black)

> A production-grade E-commerce platform built with MERN, secured with Nginx, and deployed on AWS EC2 via Docker and docker-compose.yml.

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

⚙️ Tech Stack
### 🛠️ Tech Stack

| Layer | Technology | Role |
| :--- | :--- | :--- |
| **🖥️ Frontend** | ![React](https://img.shields.io/badge/React.js-61DAFB?style=flat&logo=react&logoColor=black) | User-facing SPA |
| **🛠️ Admin** | ![React](https://img.shields.io/badge/React.js-61DAFB?style=flat&logo=react&logoColor=black) | Dashboard SPA |
| **⚙️ Backend** | ![Node](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) | REST API Server |
| **🗄️ Database** | ![Mongo](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) | NoSQL Cloud Storage |
| **🌐 Proxy** | ![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat&logo=nginx&logoColor=white) | Reverse Proxy & Routing |
| **🐳 Container** | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white) | Services Isolation |

📁 Project Structure
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
git clone https://github.com/biswajit7815/Ecommerce-Store-Forever-MERN.git
cd Ecommerce-Store-Forever-MERN

# Build and start services
docker-compose up -d --build
```

1. Technical Debugging Log (Errors Solved)
```
Category,Problem,Solution
Routing,Admin panel page refresh led to 404 Not Found.,Configured basename in React Router & updated Vite base path for sub-directory hosting.
Deployment,vite: not found during Docker build.,Refined Dockerfile layer ordering to copy package.json and install dependencies before source code.
Authentication,"""Not Authorized"" loop in Admin Panel.",Standardized JWT payload (Object vs. String) between Login/Auth middleware; forced re-login for token refresh.
Integration,"Cloudinary ""Invalid Signature"" error.",Synchronized EC2 server time (NTP) and ensured CLOUDINARY_SECRET was correctly injected via environment variables.
DevOps,Hardcoded API keys in docker-compose.yml.,Implemented professional environment variable substitution (${VAR}) using a root .env file.
Git/CI,GitHub push rejected (Fetch First error).,Resolved remote/local history conflicts using git pull --rebase and --force push to establish the local server code as the primary source of truth.
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
👨‍💻 Author
```
Biswajit Behera

```
