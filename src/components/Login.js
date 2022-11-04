import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import { useContext } from "react";
import { myContext } from "./context/Context";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Back from "../assets/back.jpg"

import AdminLogout from "./superuser/AdminLogout";

function Login() {
  const [showLogin, setShowLogin] = useState(true);
  const[admin,setAdmin]=useState([])
  const navigate=useNavigate()
const{password,username,setUsername,setPassword}=useContext(myContext)
const[isLogin,setIsLogin]=useState(false)
 const handleSubmit=(e)=>{
        e.preventDefault();
  fetch("http://localhost:3000/authentics",{
    method:"POST",
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify({
            admin:{ 
            username: username,
            password: password}
        })
        })
   .then((resp)=>{
    if(resp.ok){
        resp.json()
        .then(data=>{
       localStorage.setItem("adminInfo",JSON.stringify(data))
      setAdmin(data.admin)
    navigate("/chart")
      setPassword("");
     setUsername('')
    })
    }
    else{
        resp.json()
        .then(error=>console.log(error))
        navigate("/chart")
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
                        <input type="text" 
                        name="text" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" 
                         placeholder="Enter your password"
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required 
                         value={password} onChange={(e)=>setPassword(e.target.value)} />

                    </label>
                    <label className="username">
                Username:
                <input type="text" name="username" placeholder='Enter user name'value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </label>
            <div className="signup"> 
   
 
         <p className='animation a5'><Link to="/Adminsignup">Don't have acount create one</Link></p>
    
            </div> 
            <button className="btn">Login</button>
            <AdminLogout setAdmin={setAdmin}/>
      </form>
      </div>
       <div style={{backgroundImage:`url(${Back})`}} className="right"></div>
    </div>
  );
}
export default Login;

