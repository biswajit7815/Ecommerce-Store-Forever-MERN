<div align="center">

<br/>

# 🛍️ Ecommerce-Store-Forever-MERN

### Production-Ready · 3-Tier MERN Stack · Fully Dockerized · EC2 Deployed

<br/>

![Live](https://img.shields.io/badge/Status-Live%20%F0%9F%9F%A2-brightgreen?style=flat-square)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=flat-square&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-Reverse%20Proxy-009639?style=flat-square&logo=nginx&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-Backend-339933?style=flat-square&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=flat-square&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-Payments-635BFF?style=flat-square&logo=stripe&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Media-3448C5?style=flat-square&logo=cloudinary&logoColor=white)

<br/>

> A fully containerized, production-grade E-commerce platform —
> built with the MERN stack, secured behind Nginx, and deployed on AWS EC2.

<br/>

### 🌐 [Live Demo → http://3.111.213.122/](http://3.111.213.122/)

<br/>

</div>

---

## 📌 Table of Contents

- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Key Features](#-key-features)
- [Project Structure](#-project-structure)
- [Docker Setup](#-docker-setup)
- [Nginx Configuration](#-nginx-configuration)
- [Environment Variables](#-environment-variables)
- [Running Locally](#-running-locally)
- [Author](#-author)

---
## 🏛️ Architecture
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

---

## ⚙️ Tech Stack

| Layer | Technology | Role |
|-------|-----------|------|
| 🖥️ Frontend | React.js | User-facing SPA |
| 🛠️ Admin | React.js | Admin Management Dashboard |
| ⚙️ Backend | Node.js + Express | REST API Server |
| 🗄️ Database | MongoDB Atlas | NoSQL Cloud Storage |
| 🌐 Proxy | Nginx | Reverse Proxy & Routing |
| 🐳 Container | Docker | Services Isolation |
| ☁️ Media | Cloudinary | Asset Management |

---

## 🔥 Key Features

- **DevOps-First Workflow:** Fully containerized using `docker-compose` with health checks.
- **Nginx Routing:** Centralized traffic management via Nginx reverse proxy.
- **Dynamic Config:** Professional variable substitution (`${VAR}`) in Docker Compose.
- **Secure Auth:** JWT-based stateless authentication.
- **Cloud-Ready:** Deployed on AWS EC2 with optimized build layers.

---

## 📁 Project Structure

Ecommerce-Store-Forever-MERN/
├── 📂 admin/            # Admin Dashboard (React)
├── 📂 backend/          # Node.js Express API
├── 📂 frontend/         # Customer Frontend (React)
├── 📂 nginx/            # Nginx Proxy Configuration
├── 📄 docker-compose.yml # Infrastructure Orchestration
└── 📄 .env              # Environment Variables


---

## 🐳 Docker Setup

### Deploy in Production
```bash
# Clone the repository
git clone [https://github.com/biswajit7815/Ecommerce-Store-Forever-MERN.git](https://github.com/biswajit7815/Ecommerce-Store-Forever-MERN.git)

# Build and start services
docker-compose up -d --build

```

🔐 Environment Variables

MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_SECRET_KEY=your_secret
STRIPE_SECRET=your_stripe_key
PORT=3000

👨‍💻 Author
Biswajit Behera — DevOps & Full Stack Engineer

