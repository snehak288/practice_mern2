const { getCategory } = require('../controllers/categoryController')

const categoryRouter=require('express').Router()

categoryRouter.post('/addCategory',addCategory)
categoryRouter.get('/getAllCategories',getAllCategories)
categoryRouter.get('/getCategories',getCategories)
categoryRouter.get('/getCategory/:id',getCategoryById)
categoryRouter.put('/getCategory/:id',updateCategory)
categoryRouter.delete('deleteCategory/:id',deleteCatgeory)

module.exports=categoryRouter;