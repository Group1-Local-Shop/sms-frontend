import React from 'react'
import axios from 'axios'
const Delete = ({admin, admins,setAdmins}) => {
    const adminInfo = JSON.parse(localStorage.getItem("adminInfo"))
 console.log(adminInfo)
    const handleDelete=()=>{
    console.log(admin)
      axios.delete(`/admins/${admin}`,{
        method: "DELETE",
        headers:{"Content-Type": "application/json",
            Authorization: 'Bearer ' + adminInfo.jwt }
    })
    .then(()=>{
        const undeletedAdmin=admins.filter(admin=>admin.id!==admin)
        setAdmins(undeletedAdmin)
    }) 
}
  return (
    <div>
        <button className='btns' onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Delete