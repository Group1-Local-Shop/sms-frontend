import { current } from '@reduxjs/toolkit'
import axios from 'axios'
import React,{Children, useState,useRef,useEffect} from 'react'
import AddModal from '../addModal/AddModal'
import Update from '../modal/Update'
const ProductDetails = ({productId,products,setProducts,status,stock,spoiled}) => {
    // console.log(productId)
    //  console.log(products)
// const [stocks, setStocks]=useState(stock)
 const [modal, setModal]=useState(false)
// const[spoil,setSpoil]=useState(spoiled)
// const[stat,setStat]=useState(status)
const[showProduct,setShowProduct]=useState("")
const[myProduct,setMyProduct]=useState([])
    const [statu,setStatu]=useState("")
    const[item,setItem]=useState('')
    const[inStock,setInstock]=useState('')
    const[buying,setBuying]=useState('')
    const[selling,setSelling]=useState('')
    const[image,setImage]=useState('')
    const[name,setName]=useState('')
    const[spoilpro,setSpoilpro]=useState('')
    const[clerkId,setClerkId]=useState('')

 const userInfo = JSON.parse(localStorage.getItem("userInfo"))
 console.log(userInfo)
const handleModal=()=>{
setModal(true)

    let body=document.body
     body.classList.add('no_scoll')

};
const handleClose=()=>{
    setModal(false)
     let body=document.body
     body.classList.remove('no_scoll')
}
const handleSubmit = (e)=>{
e.preventDefault()
 fetch("http://localhost:3000/products",{
            method:"POST",
          headers: {
             "Content-Type": "application/json",
            Authorization: 'Bearer ' + userInfo.jwt 
        },
        body: JSON.stringify({
            payment_status: statu,
            no_of_received_item: item,
            no_of_product_in_stock:inStock,
           buying_price:buying,
            selling_price: selling,
            no_of_spoiled_item:spoilpro,
            clerk_id:clerkId,
            name:name,
            image:image
        })})
        .then(res=>res.json())
        .then(data=>{
            setMyProduct(data,...myProduct)
          setStatu("")
          setItem("")
          setInstock("")
          setBuying("")
          setSelling("")
          setSpoilpro("")
          setClerkId("")
          setName("")
          setImage("")
        })
         window.location.reload(true)
 
    
}
const handleDelete=()=>{
    axios.delete(`/products/${productId}`,{
        method: "DELETE",
        headers:{"Content-Type": "application/json",
            Authorization: 'Bearer ' + userInfo.jwt }
    })
    .then(()=>{
        const undeletedProduct=products.filter(product=>product.id!==productId)
        setProducts(undeletedProduct)
    }) 
}
return(
<div>
        <div className='buttons'>
            <Update modal={modal} setmodal={setModal}/>
            <button onClick={handleModal} className="update">Add</button>
            <button onClick={handleDelete} className='del-btn'>Delete</button>

        </div>
        <AddModal modal={modal}>
           <div className='modal-wrapper'> 
            <div onClick={handleClose} className='close'>&times;</div>
            <div className='add-container'>
              <form onSubmit={handleSubmit}>
            <input type="text" value={statu} placeholder="product status" title='can be pending or approved or rejected' onChange={(e)=>setStatu(e.target.value)}/>
            <input type="number" value={inStock} placeholder="number of product in stock" onChange={(e)=>setInstock(e.target.value)}/>
            <input type="text" value={buying} placeholder="buying price of product" onChange={(e)=>setBuying(e.target.value)}/>
            <input type="text" value={selling} placeholder="selling price of the product" onChange={(e)=>setSelling(e.target.value)}/>
            <input type="text" value={name} placeholder="name of the product" onChange={(e)=>setName(e.target.value)}/>
            <input type="text" value={image} placeholder="Image url ..." onChange={(e)=>setImage(e.target.value)}/>
            <input type="number" value={clerkId} placeholder="Your number" onChange={(e)=>setClerkId(e.target.value)}/>
           <input type="text" value={item} placeholder="number of received items" onChange={(e)=>setItem(e.target.value)}/>
            <input type="text" value={spoilpro} placeholder="number of spoiled items" onChange={(e)=>setSpoilpro(e.target.value)}/>
 
                <button  type='submit'>Submit</button>
              </form>
            </div>
           </div>
        </AddModal>
</div>
)}

export default ProductDetails