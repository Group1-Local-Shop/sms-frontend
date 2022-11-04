import React from 'react'
import { useNavigate } from 'react-router-dom'
const Logout = ({setClerk}) => {
    console.log(setClerk)
    const navigate=useNavigate()
    function handleLogout(){
        setClerk(null)
        localStorage.removeItem("userInfo")
        navigate("/")
    }
  return (
    <div>
        <button className='but' onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Logout