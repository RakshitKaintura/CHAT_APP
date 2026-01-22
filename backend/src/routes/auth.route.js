
import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router = express.Router();

// CHANGE THIS: signup should be a POST request to accept body data
router.post("/signup", signup);

// CHANGE THIS: login should usually be POST to keep credentials out of the URL
router.post("/login", (req, res) => {
    res.send("Login Successful");
});

// FIX TYPO: removed the space after "/logout "
router.get("/logout", (req, res) => {
    res.send("Logout Successful");
});

export default router;