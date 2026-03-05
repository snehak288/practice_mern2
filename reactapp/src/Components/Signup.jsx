import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate=useNavigate()
    // const[buttonText,setbuttonText]=useState(true);
    const[showPassword,setPassword]=useState(false);
    const[showconfirmPassword,setconfirmPassword]=useState(false);
    const[roleArray,setroleArray]=useState(["Customer"])
    //usestate for form values
    const[formData,setformData]=useState({
        userName:"",
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        role:"Customer"
    })
    //usestate for errors
    const[errors,setErrors]=useState({})
    const[globalError,setglobalError]=useState(null)
    //function for error validation
    const validation=()=>{
       let validationErrors={}
        if(!formData.userName){
        validationErrors.userName="UserName is required"
    }
       if(!formData.firstName){
        validationErrors.firstName="First Name is required"
    }
    if(!formData.lastName){
        validationErrors.lastName="Last Name is required"
    }
    if(!formData.email){
        validationErrors.email="Email is required"
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/.test(formData.email)){
        validationErrors.email="Invalid email format"
    }if(!formData.password){
        validationErrors.password="Password is required"
    }

    if(formData.password!==formData.confirmPassword){
        validationErrors.confirmpass="Passwords do not match"
    }
    if(!formData.role){
        validationErrors.role="Role is required"
    }
   
    return  validationErrors
}

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!formData.userName&&!formData.firstName&&!formData.lastName&&!formData.email&&!formData.password&&!formData.confirmPassword){
            setglobalError("Fill all the required fields");
            return;
        }
        const validationErrors=validation();
        if(Object.keys(validationErrors).length>0){
            setErrors(validationErrors)
            return
        }
        setErrors({})
        setglobalError(null)
        
        
        if(formData.role=="Seller"){
            setroleArray(["Customer","Seller"])
        }
        const response=await axios.post('http://localhost:8080/users/signup',{
            userName:formData.userName,
            firstName:formData.firstName,
            lastName:formData.lastName,
            phone:formData.phone,
            email:formData.email,
            password:formData.password,
            role:roleArray})
            navigate("/profile")
        // console.log(formData)
    }
  return (
    <div>
        <form onSubmit={handleSubmit} noValidate>
            <div> 
                {globalError&& <p>{globalError}</p>}
                <span>Username:</span>
                <input type="text" placeholder="Enter your username" value={formData.userName} onChange={(e)=>{if(e.target.value){setErrors({...errors,userName:""})};setformData({...formData,userName:e.target.value})}}/>
                {errors.userName && <span>{errors.userName}</span>}

                <span>First Name:</span>
                <input type="text" placeholder="Enter your First Name" value={formData.firstName} onChange={(e)=>{if(e.target.value){setErrors({...errors,firstName:""})}; setformData({...formData,firstName:e.target.value})}}/>
                 {errors.firstName && <span>{errors.firstName}</span>}

                 <span>Last Name:</span>
                <input type="text" placeholder="Enter your Last Name" value={formData.lastName} onChange={(e)=>{if(e.target.value){setErrors({...errors,lastName:""})};setformData({...formData,lastName:e.target.value})}}/>
                {errors.lastName && <span>{errors.lastName}</span>}

                <span>Email:</span>
                <input type="text" placeholder="Enter your email" value={formData.email} onChange={(e)=>{if(e.target.value){setErrors({...errors,email:""})};setformData({...formData,email:e.target.value})}} />
                {errors.email && <span>{errors.email}</span>}

                 <span>Phone:</span>
                <input type="text" placeholder="Enter your phone" value={formData.phone} onChange={(e)=>{if(e.target.value){setErrors({...errors,email:""})};setformData({...formData,phone:e.target.value})}} />
                {errors.phone && <span>{errors.phone}</span>}

                <span>Password:</span>
                <input type={showconfirmPassword?"text":"password"} placeholder="Enter your password" value={formData.password} onChange={(e)=>{if(e.target.value){setErrors({...errors,password:""})};setformData({...formData,password:e.target.value})}}/>
                <button type='button' onClick={()=>setconfirmPassword(!showconfirmPassword)}>{showconfirmPassword?"Hide":"Show"}</button>
                {errors.password && <span>{errors.password}</span>}

                <span>Confirm password:</span>
                <input type={showPassword?"text":"password"} placeholder="Re-enter your password" value={formData.confirmPassword} onChange={(e)=>{if(e.target.value){setErrors({...errors,confirmPassword:""})};setformData({...formData,confirmPassword:e.target.value})}}/>
                <button type='button' onClick={()=>setPassword(!showPassword)}>{showPassword?"Hide":"Show"}</button>
                {errors.confirmPassword && <span>{errors.confirmPassword}</span>}

                <label>Role:</label>
                <select name='role' value={formData.role} onChange={(e)=>{setformData({...formData,role:e.target.value})}}>
                    <option value="Customer" selected>Customer</option>
                    <option value="Seller">Merchant</option>
                </select>

                <button type="submit">Sign Up</button>

            </div>
        </form>
    </div>
  )
}

export default Signup