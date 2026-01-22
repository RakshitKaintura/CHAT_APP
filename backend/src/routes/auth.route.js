import express from "express";

const router =express.Router();

router.get("/signup",(req,res)=>{
res.send("Signup Succesful");
});
router.get("/login",(req,res)=>{
res.send("Login  Succesful");
});
router.get("/logout ",(req,res)=>{
res.send("Logout Succesful");
});

export default router;