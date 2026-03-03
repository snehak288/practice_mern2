const {addUser,getUser} = require('../controllers/userController')
const express=require("express")
const userRouter= express.Router()

userRouter.post('/signup',addUser);
userRouter.get('/login',getUser)

module.exports=userRouter;