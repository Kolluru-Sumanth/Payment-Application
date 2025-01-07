const express=require('express');
const { User, Account } = require('../db');
const jwt=require('jsonwebtoken');
const JWT_SECRET = require('../configue');
const zod=require('zod');
const { authMiddleware } = require('../middleware');
const router=express.Router();

router.post("/signup",async(req,res)=>{
    const body=req.body
    
    const value=await User.findOne({username:body.username});
    if(value){
        return res.json({msg:"User already existed"});
    }

    const signupSchema=zod.object({
        username:zod.string().email(),
        password:zod.string(),
        firstname:zod.string(),
        lastname:zod.string()
    })

    const result=signupSchema.safeParse(body);
    if (!result.success){
        return res.status(411).json({msg:"invalid inputs"});
    }

    User.create(body).then(async(value)=>{
        
        await Account.create({
            userId:value._id,
            balance: 1+ Math.random()*1000
        })

        const token=jwt.sign({userId:value._id},JWT_SECRET);
        if(value){
            return res.status(200).json({msg:"User Created",token:token});
        }
        else{
            return res.status(411).json({msg:"error in creating user at db",success:false})
        }
    })
    
});

router.get("/signin",(req,res)=>{
    const body=req.body;
    const signinSchema=zod.object({
        username:zod.string().email(),
        password:zod.string()
    })

    const result=signinSchema.safeParse(body);
    if(!result.success){
        return res.json({msg:"invalid inputs"}).status(411);
    }

    User.findOne({
        username:body.username
    }).then((value)=>{
        if(!value){
            return res.json({msg:"User Doesn`t exists",success:false});
        }
        else{
            if(value.password!=body.password){
                return res.json({msg:"Wrong Password"}).status(411);
            }
            else{
                const token=jwt.sign({userId:value._id},JWT_SECRET);

                return res.json({token:token}).status(200);
            }
        }
    })

    
})

router.put("/",authMiddleware,(req,res)=>{
    const updateSchema=zod.object({
        password:zod.string().optional(),
        firstname:zod.string().optional(),
        lastname:zod.string().optional()
    });
    const body=req.body;
    const result=updateSchema.safeParse(body);
    if(result.success){
        User.findOneAndUpdate({_id:req.userId},body).then(()=>{
            return res.json({msg:"Updated Successfully"}).status(200);
        })
    }
    else{
        return res.json({msg:"invalid inputs/error in Updating Info"})
    }
    
});

router.get("/bulk",authMiddleware,async(req,res)=>{
    const filter=req.query;

    try {
        const users=User.find({
            $or:[{
                firstname:{
                    "$regex":filter,
                    "$options":"i"
                }
            },
            {lastname:{
                "$regex":filter,
                "$options":"i"
            }}
        ]
        })


    const result=await users.map(user=>({
        firstname:user.firstname,
        lastname:user.lastname,
        userId:user._id
    }
    ));
    return res.status(200).json(result);
    } catch (error) {
        return res.status(411).json({msg:"error in filtering users"});
    }    
});

module.exports=router;