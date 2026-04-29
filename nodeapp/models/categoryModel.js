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