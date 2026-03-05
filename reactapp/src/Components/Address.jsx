import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Address() {
    const[address,setAddress]=useState([])
    const[showForm,setShowForm]=useState(false)
    const userData=JSON.parse(sessionStorage.getItem('userData'))
    const userId=userData.userId
    const[formData,setFormData]=useState({
        userId:userId,
        street:"",
        city:"",
        state:"",
        country:"",
        pincode:"",
        type:[],
        
    })
    
    const fetchData=async()=>{
        try{
            const response=await axios.get(`http://localhost:8080/address/getAllAddressById/${userId}`)
            setAddress(response.data)
        }
        catch(error){
            console.log(error.message)
        }
    }
    useEffect(()=>{fetchData()},[address])
    const handleAdd=async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post('http://localhost:8080/address/addAddress',formData)
        }
        catch(error){
            console.log(error.message)
        }
    }
  return (
    <div>Address
        <div>
            {address.length===0?(<p>No address found</p>):(
                address.map((address,index)=>(
                    <div>
                       
                        <p>{index+1}</p>
                         <p>{address.type}</p>
                        <p>{address.street}</p>
                        <p>{address.city}</p>
                        <p>{address.state}</p>
                        <p>{address.country}</p>
                        <p>{address.pincode}</p>
                    
                    </div>
                ))
            )}
        </div>
        <button type='button' onClick={()=>{ setShowForm(!showForm)}}>Add Address</button>
        <div style={{display:showForm?"inline":"block"}}>
            <form onSubmit={handleAdd} noValidate>
            <input type='text' placeholder='street' value={formData.street} onChange={(e)=>setFormData({...formData,street:e.target.value})}/>
            <input type='text' placeholder='city' value={formData.city} onChange={(e)=>setFormData({...formData,city:e.target.value})}/>
            <input type='text' placeholder='state' value={formData.state} onChange={(e)=>setFormData({...formData,state:e.target.value})}/>
            <input type='text' placeholder='country' value={formData.country} onChange={(e)=>setFormData({...formData,country:e.target.value})}/>
            <input type='text' placeholder='pincode' value={formData.pincode} onChange={(e)=>setFormData({...formData,pincode:e.target.value})}/>
            <select onChange={(e)=>setFormData({...formData,type:e.target.value})}>
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Others">Others</option>
            </select>
            <button type='submit'>Add</button>
            </form>
        </div>
    </div>
  )
}

export default Address