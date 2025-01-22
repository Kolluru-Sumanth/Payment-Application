const mongoose= require('mongoose')
const mongo_Url= require('./configue')
mongoose.connect(mongo_Url);

const userSchema={
    username:{type:String,required:true},
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    password:{type:String,required:true}
}

const User=mongoose.model("User",userSchema);

const accountSchema={
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
}

const Account=mongoose.model("Account",accountSchema);

module.exports={User,Account};
