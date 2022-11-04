import React from 'react'
import { useNavigate } from 'react-router-dom'
const AdminLogout = ({setAdmin}) => {
  const navigate=useNavigate()
    function handleLogout(){
        setAdmin(null)
        localStorage.removeItem("adminInfo")
        navigate("/")
    }
  return (
    <div>
        <button className='but' onClick={handleLogout}>logout</button>
    </div>
  )
}

export default AdminLogout