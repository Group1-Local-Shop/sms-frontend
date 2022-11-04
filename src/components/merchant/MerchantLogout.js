import React from 'react'
import { useNavigate } from 'react-router-dom'

const MerchantLogout = ({setMerchant}) => {
  const navigate=useNavigate()
    function handleLogout(){
        setMerchant(null)
        localStorage.removeItem("merchantInfo")
        navigate("/")
    }
  return (
    <div>
        <button className='but' onClick={handleLogout}>logout</button>
    </div>)
}

export default MerchantLogout