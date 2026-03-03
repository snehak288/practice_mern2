const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:[String],
        enum:["Customer","Seller"],
        default:"Customer"
    },
    dob:{
        type:String,
        default:null
    }
})

module.exports=mongoose.model("User",userSchema)