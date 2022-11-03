import React, { useContext, useState } from 'react'
import { myContext } from '../context/Context'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Back from "../../assets/back.jpg"

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon
    } from 'mdb-react-ui-kit';

const ClerkLogin = () => {
  const [clerk,setClerk]=useState([])
const[isLogin,setIsLogin]=useState(false)
const{password,username,setUsername,setPassword}=useContext(myContext)
const navigate=useNavigate()
 const handleSubmit=(e)=>{
        e.preventDefault();
  fetch("http://localhost:3000/api/v1/login",{
    method:"POST",
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify({
            clerk:{ 
            username: username,
            password: password}
        })
        })
   .then((resp)=>{
    if(resp.ok){
        resp.json()
        .then(data=>{
       /*localStorage.setItem("token",data.token)*/
      /*setClerk(data.clerk)*/
      localStorage.setItem("userInfo",JSON.stringify(data))
     navigate("/products")
      setPassword("");
     setUsername('')
    })
    }
    else{
        resp.json()
        .then(error=>console.log(error))
        navigate("/clerk")
    }
    
   })
    
  }
    function handleChange(){
  setIsLogin(isLogin=>!isLogin)
}
   
  return (
    <div className='container'>
      <div className='left'>
         <div class="header">
      <h2 class="animation a1">Welcome Back</h2>
      <h4 class="animation a2">Log in to your account using email and password </h4>
      </div>
      <form className="admin" onSubmit={handleSubmit}>
        <label className="password">
                        password:
                        <input type="text"  className='form-field a3'
                        name="text" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" 
                         placeholder="Enter your password"
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required 
                         value={password} onChange={(e)=>setPassword(e.target.value)} />

                    </label>
                    <label className="username">
                Username:
                <input type="text" name="username"  className='form-field a4' placeholder='Enter user name'value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </label>
              <div className="signup"> 
   
 
         <p className='animation a5'><Link to="/clerk">Forgot Password</Link></p>
    
            </div>
            <button className="animation a6">Login</button>
      </form>
      </div>
      <div style={{backgroundImage:`url(${Back})`}} className="right"></div>
   
    </div>
  )
}

export default ClerkLogin
