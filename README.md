# 🚀 Project Setup Guide

## 📦 Manual Installation

### 1️⃣ Install Node.js

Make sure Node.js is installed on your system.

---

### 2️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd <your-project>
```

---

### 3️⃣ Install Dependencies

```bash
npm install
```

---

### 4️⃣ Start Database Locally (Docker)

```bash
docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

👉 Go to **Neon.tech** (or any DB tool) and create a new database if needed
👉 Update your `.env` file with DB credentials

---

### 5️⃣ Setup Environment Variables

Create a `.env` file:

```env
DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"
```

---

### 6️⃣ Run Prisma Commands

```bash
npx prisma migrate dev
npx prisma generate
```

---

### 7️⃣ Start the Server

```bash
npm run build
npm run start
```

---

# 🐳 Docker Installation


- Install docker
- Start postgres
    - Docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
- Build the image - `docker build -t user-project`
- Start the image - `docker run -p 3000:3000 user-project`

# Docker Compose Installation

- Install docker, dockert-compose
- Run `docker-compose up`
