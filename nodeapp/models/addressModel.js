const mongoose= require("mongoose")

const AddressSchema=mongoose.Schema({
    userId:{ 
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"User"
    },
    street:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    type:{
        type:["String"],
        enum:["Home","Work","Others"],
        default:["Home"]
    },
    others:{
        type:String,
        default:null
    }
   
})
module.exports=mongoose.model("Address",AddressSchema)