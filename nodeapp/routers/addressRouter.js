const express=require("express")
const addressRouter=express.Router();
const {getAllAddressById,getAddressbyType,addAddress}=require('../controllers/addressController')

addressRouter.get("/getAllAddressById/id",getAllAddressById)
// addressRouter.get("/getAddressbyType/name",getAddressbyType)
addressRouter.post("/addAddress",addAddress)

module.exports=addressRouter;
