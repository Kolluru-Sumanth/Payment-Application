const jwt=require('jsonwebtoken');
const JWT_SECRET = require('./configue');

const authMiddleware=(req,res,next)=>{
    const headerToken=req.headers.authorization;

    if(!headerToken || !headerToken.startsWith('Bearer ')){
        console.log(headerToken);
        return res.json({msg:"error in middle ware"}).status(403);
    }
    const token=headerToken.split(" ")[1];

    try{
        const decoded=jwt.verify(token,JWT_SECRET);
        req.userId=decoded.userId;
        next();
    }
    catch{
        return res.json({msg:"error in authmiddleware"}).status(403);
    }
}

module.exports={
    authMiddleware
}