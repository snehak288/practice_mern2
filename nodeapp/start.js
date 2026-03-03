const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const userRouter=require('./routers/userRouter')


const app=express();
app.use(cors())

app.use(express.json())
app.use('/users',userRouter)
mongoose.connect('mongodb://127.0.0.1:27017/mern2')
.then(()=>{
    console.log("Database connected successfully")
    app.listen(8080,()=>console.log("App listening on port 8080"))
})
.catch((error)=>console.log(error))
   


