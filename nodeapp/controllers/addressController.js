const Address=require('../models/addressModel')

const getAllAddressById=async(req,res)=>{
try{
const addresses=await Address.findById(req.params.id)
if(!addresses){
 return res.status(404).json({message:"No addresses found"})
    }
    return res.status(200).json(addresses)
}catch(error){
    res.status(500).json({message:error.message})
    }
  
}
const getAddressbyType=async()=>{}
const addAddress=async(req,res)=>{
    const{userId,street,city,state,country,pincode,type,others}=req.body
    if(!userId||!street||!city||!state||!country||!pincode||!type){
        return res.status(400).json({message:"Fields are missing"})
    }
    try{
    const address=await Address.create(req.body)
    return res.status(201).json(address)
      }
    catch(error){
        res.status(500).json({message:error.message})
    }
}


module.exports={getAllAddressById,getAddressbyType,addAddress}