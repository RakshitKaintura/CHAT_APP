import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./lib/db.js"; // 1. Import your DB connection utility
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();    

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("*", (_, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

// 2. Wrap your listen in the connectDB or call it here
app.listen(PORT, () => {
    console.log("Server running on port : " + PORT);
    connectDB(); // 3. Establish the connection to MongoDB
});