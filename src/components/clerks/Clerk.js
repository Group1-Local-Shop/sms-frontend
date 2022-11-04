import React, { useContext,useState } from 'react'
import { myContext } from '../context/Context'

const Clerk = () => {
    const {username,setUsername,password,setPassword,passwordConfirmation,setPasswordConfirmation,
email,setEmail,firstName,setFirstName,lastName,setLastName,role,setRole
,clerk,setClerk,adminId, setAdminId}=useContext(myContext)
const[isLogin,setIsLogin]=useState(false)
const handleSubmit=(e)=>{
        e.preventDefault();
        fetch("http://localhost:3000/api/v1/clerks",{
            method:"POST",
          headers: {
            "Content-Type": "application/json",
           Accept: "application/json"
        },
         body:JSON.stringify({
            clerk:{ 
            username: username,
            password: password,
            password_confirmation: passwordConfirmation,
            email:email,
            first_name: firstName,
            last_name:lastName,
            role:role,
            admin_id:adminId}
        })
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(data)
            localStorage.setItem("jwt", data.jwt);
           setClerk(data.clerk)
            setClerk([data, ...clerk])
            setUsername("")
            setPassword("")
            setPasswordConfirmation("")
            setEmail("")
            setFirstName("")
            setLastName("")
            setRole("")
            setAdminId("")
        })
    }
      function handleChange(){
  setIsLogin(isLogin=>!isLogin)
}
  return (
  <>
            <div className='modal-body'>
                
                <form className="admi" onSubmit={handleSubmit}>
                    <h1 className="title">Clerk Signup</h1>
                
                <div className='row'>
                <input type="text" name="username"  className="input" placeholder='Enter user name'value={username} onChange={(e)=>setUsername(e.target.value)}/>
              <label htmlFor='' className="label">Username</label>
              </div>
            <div className='row'>
                   <input type="text"className="input" name="text" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" 
                         placeholder="Enter your password"
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required 
                         value={password} onChange={(e)=>setPassword(e.target.value)} />
                <label htmlFor='' className="label">Password</label>
                    </div>
                     <div className='row'>
                   
                        <input type="password" className="input" name="passwordConfirmation" 
                        placeholder="confirm password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                        value={passwordConfirmation}
                         onChange={(e)=> setPasswordConfirmation(e.target.value)}/>
                   
                    <label htmlFor='' className="label">Confirm-password</label>
                    </div>
                      <div className='row'>
                    
                        <input type="text" name="email" className="input" placeholder="Enter email address"
                        value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    
                    <label htmlFor='' className="label">Email</label>
                    </div>
                    <div className='row'>
                   
                        <input type="text" name="firstName" className="input" placeholder="Enter your first name"
                        value={firstName} 
                        onChange={(e)=>setFirstName(e.target.value)}/>
                    
                    <label htmlFor='' class="label">First name</label>
                    </div>
                       <div className='row'>
                        <input type="text" name="lastName" className="input" placeholder="Enter your last name"
                        value={lastName} 
                        onChange={(e)=>setLastName(e.target.value)}/>
                    <label htmlFor='' className="label">Last Name</label>
                    </div>
                     <div className='row'>
                        <input type="text" name="adminId" className="input" placeholder="Enter phone number"
                        value={adminId} onChange={(e)=>setAdminId(e.target.value)}/>
                    <label htmlFor='' className="label">Admin No</label>
                    </div>
                     <div className='row'>
                    
                        <input type="text" className="input" placeholder="Enter role" 
                        name="role" value={role} 
                        onChange={(e)=>setRole(e.target.value)}/>
                    
                    <label htmlFor='' className="label">Role</label>
                    </div>
                    <input type="submit" className="submitBtn" value="Sign up"/>
                </form>
                
            </div>
            
        </>

    )
}

export default Clerk