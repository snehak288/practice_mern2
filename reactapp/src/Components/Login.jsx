import React, { useState } from 'react'
import axios from 'axios'

function Login() { 
    const[formData,setFormData]=useState({
        userName:"",
        password:""
    })
    const[errors,setErrors]=useState({})
    const[showPassword,setShowPassword]=useState(false)

    const validation=()=>{
        let validationErrors={};
        if (!formData.userName){
            validationErrors.userName="Username is required"
        }
        if(!formData.password){
            validationErrors.password="Password is required"
        }
        return validationErrors
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const validationErrors=validation()
        if(Object.keys(validationErrors).length>0){
            setErrors(validationErrors)
            return
        }
        setErrors({})
        const response=await axios.post('http://localhost:8080/users/login',formData)
        console.log(response.data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit} noValidate>
            <input type='text' placeholder='username' value={formData.userName} onChange={(e)=>{if(e.target.value){setErrors({...errors,userName:""})};setFormData({...formData,userName:e.target.value})}}/>
            <input type={showPassword?"text":"password"} placeholder='password' value={formData.password} onChange={(e)=>{if(e.target.value){setErrors({...errors,password:""})};setFormData({...formData,password:e.target.value})}}/>
            <button type='button' onClick={()=>setShowPassword(!showPassword)}>{showPassword?"Hide":"Show"}</button>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Login