import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import Products from '../products/Products'
import { useParams } from 'react-router-dom'
import Delete from './Delete'

const Admin = () => {
    const params=useParams()
    console.log(params)
   
    const [admins,setAdmins]=useState([])
     const adminInfo= JSON.parse(localStorage.getItem("adminInfo"))
 console.log(adminInfo)
    
   
     useEffect(()=>{
    fetch("http://localhost:3000/admins",{
        headers: {
             "Content-Type": "application/json",
            Authorization: 'Bearer ' + adminInfo.jwt 
        }
    })
    
    .then(res=> res.json())
    .then((data)=>setAdmins(data))
    },[])
      
  return (
    <div>
    {admins? (admins.map(admin=>{
        return(
           <> <h1>{admin.first_name}</h1>
          
           <div className="mtable-container">
             <p>Store clerks</p>
             <table className="stable">
                <caption>List of all clerks in store</caption>
                 <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>Delete clerk</th>
            </tr>
          </thead>
          <tbody>
            {admin.clerks.map(clerk=>{
                return(
                    <tr key={clerk.id}>
                        <td>{clerk.first_name}</td>
                        <td>{clerk.last_name}</td>
                        <td>{clerk.role}</td>
                        <td><Delete admin={admin.id} admins={admins} setAdmins={setAdmins}/></td>
                    </tr>
                )
            })}
            </tbody>
            
            </table>
             </div>
            </>
           
        )
    })):<h3>hello</h3>} 
       
      
    </div>
  )
}

export default Admin
