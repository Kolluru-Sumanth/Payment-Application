const express=require('express');

const router=express.Router();

const userRoute=require("./userRoutes");
router.use("/user",userRoute);

const accountRoute=require('./accountRoutes')
router.use("/account",accountRoute);

module.exports=router