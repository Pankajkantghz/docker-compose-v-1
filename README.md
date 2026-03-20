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

# 🐳 Docker Compose Installation

### 1️⃣ Create `.env`

```env
POSTGRES_PASSWORD=mysecretpassword
DATABASE_URL="postgresql://postgres:mysecretpassword@postgres:5432/postgres"
```

---

### 2️⃣ Create `docker-compose.yml`

```yaml
version: '3.8'

services:
  postgres:
    image: postgres
    container_name: postgres_db
    environment:
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data

  backend:
    build: .
    container_name: backend_app
    depends_on:
      - postgres
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: ${DATABASE_URL}

volumes:
  pgdata:
```

---

### 3️⃣ Start the Application

```bash
docker-compose up --build
```

---

### 4️⃣ Run Prisma (if needed)

```bash
npx prisma migrate dev
npx prisma generate
```

---

# 🌐 Access

* Backend → http://localhost:3000
* PostgreSQL → localhost:5432

---

# 🧠 Notes

* Use `postgres` as hostname inside Docker
* Do NOT use `localhost` inside containers
* `.env` file should NOT be pushed to GitHub

---

# ⚡ Summary

* Manual setup → local DB + backend
* Docker Compose → full containerized setup
* Prisma → handles DB schema & queries

---
