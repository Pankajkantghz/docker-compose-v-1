import { PrismaClient } from "@prisma/client/extension";
import express from "express";


const app = express();
app.use(express.json());

const prismaClient = new PrismaClient();

// GET all users
app.get("/", async (req, res) => {
    const data = await prismaClient.user.findMany();
    res.json({ data });
});

// CREATE user
app.post("/", async (req, res) => {
    const user = await prismaClient.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    });

    res.json({ user });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});