const mongoose= require('mongoose')
mongoose.connect("mongodb+srv://kollurusumanth004:Paytm12345@paytm.rzr6w.mongodb.net/");

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
