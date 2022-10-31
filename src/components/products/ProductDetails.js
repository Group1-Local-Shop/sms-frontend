import React,{useState} from 'react'

const ProductDetails = ({productId,products,setProducts,status,stock,spoiled}) => {
    // console.log(productId)
    //  console.log(products)
const [stocks, setStocks]=useState(stock)
const[spoil,setSpoil]=useState(spoiled)
const[stat,setStat]=useState(status)
const[showProduct,setShowProduct]=useState("")
 const userInfo = JSON.parse(localStorage.getItem("userInfo"))
 console.log(userInfo)
function handleForm(){
    setShowProduct((showProduct)=>!showProduct)
    
}

const handleUpdate=(e)=>{
         e.preventDefault()
         fetch(`/products/${productId}`,{
            method:"PATCH",
            headers:{
                "Content-Type": "application/json",
                 Authorization: 'Bearer ' + userInfo.jwt 
            },
            body: JSON.stringify({
                payment_status:stat,
                no_of_product_in_stock:stocks,
                no_of_spoiled_item:spoil
            })
         })
         .then(resp=> resp.json)
         .then(data=>{
             /*localStorage.getItem("token",data.token)*/
            const newProduct=products.map(product=>{
                if(product.id===productId){
                    return data
                }
                else{
                    return product
                }
            })
            console.log(newProduct)
            setProducts(console.log(newProduct))
         })
         window.location.reload(true)
}

return(
<div>
    {showProduct ?<form onSubmit={handleUpdate} className="update">
            <input type="text" value={stat} onChange={(e)=>setStat(e.target.value)}/>
            <input type="text" value={stocks} onChange={(e)=>setStocks(e.target.value)}/>
            <input type="text" value={spoil} onChange={(e)=>setSpoil(e.target.value)}/>


            <input type='submit'value="save" className='save'/>

        </form>:null }
        
        <button onClick={handleForm} className="update">Update</button>
</div>
)
  
}

export default ProductDetails