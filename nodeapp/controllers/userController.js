const User=require('../models/userModel')
const bcrypt = require('bcrypt')

const addUser=async(req,res)=>{
   const{userName,firstName,lastName,phone,email,password,role,dob}=req.body
   try{
    if(!userName||!firstName||!lastName||!phone||!password||!role){
        return res.status(400).json({message:"Missing required fields"})
    }
    const existingUser=await User.findOne({$or:[{email,}]})
    if(existingUser){
        return res.status(409).json({message:"User already exists"})
    }
    const hashedpassword= await bcrypt.hash(password,10)
    await User.create({...req.body,password:hashedpassword})
    res.status(201).json({message:"User successfully created"})
   }
   catch(error){
    res.status(500).json({message:error.message})
   }
}

const getUser=async(req,res)=>{
    const{userName,password}=req.body
    const user=await User.findOne({userName})
    if(!user){
        return res.status(404).json({message:"Username or email doesnt exist"})
    }
    const comparepassword=await bcrypt.compare(password,user.password)
    if(!comparepassword){
        return res.status(401).json({message:"Invalid password"})
    }
    res.status(200).json({
        userName:user.userName,
        role:user.role,
        userId:user._id
    })
}

module.exports={addUser,getUser};