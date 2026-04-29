const Category=require('../models/categoryModel')

const addCategory=async(req,res)=>{
    const{name,parentCategoryId}=req.body
    try{
        const category=await Category.create(req.body)
        res.status(201).json({category:category,message:"Category created"})

    }
    catch(error){
        res.status(500).json({message:error.message})
    }

}

 const getAllCategories=async(req,res)=>{
    try{
        const allCategories=await Category.find();
        res.status(200).json(allCategories)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
// const updateCategory=async(req,res)=>{

//     try{
//         const category=await Category.findByIdAndUpdate()
//     }
// }
// const deleteCategory=async(req,res)=>{

// }
module.exports={addCategory,getAllCategories,updateCategory,deleteCategory}

const mongoose=require('mongoose')

const categorySchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    parentCategoryId:{
        type:mongoose.Schema.Types.ObjectId
    }

})

module.exports=mongoose.Model("Category",categorySchema)
