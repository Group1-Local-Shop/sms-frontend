import React, { useEffect, useState } from "react"
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
// import { Link, Outlet } from 'react-router-dom'
import axios from "axios";


function Products() {
const [products, setProducts]=useState([])
useEffect(()=>{
 axios.get("http://localhost:3000/products")
 .then(product=>setProducts(product.data))
},[]) 
    return (

        <>
        <br/>
        <div className="product">
            {
               products?(products.map(product=>{
                    return(
                    <div key={product.id} className="products">
                        <img src={product.image} alt=""/>
                        <h4>Name:{product.name}</h4>
                        <p>Payment status:{product.payment_status}</p>
                        <p>Product in stock:{product.no_of_product_in_stock}</p>
                        <p>Buying Price:{product.buying_price}</p>
                         <p>selling price:{product.selling_price}</p>
                          <p>Item received:{product.no_of_received_item}</p>
                          <p>Spoiled items:{product.no_of_spoiled_item}</p>
                    </div>
                    
                    )
                })
            ):(<h2>No product shown</h2>)}
            </div>
        </>

    )
}

export default Products
//  :no_of_product_in_stock, :buying_price, :selling_price, :no_of_spoiled_item,:clerk_id


// const MovieList = ({ movies }) => {
//     return (
//       <>
//         <h1>Movie List</h1>
//         <ul>
//           {movies.map(movie => {
//             return (
//               <li key={movie.id}>
//                 <Link to={`/movies/${movie.id}`}>
//                   {movie.title}
//                     </Link>
//               </li>
//              )
//            })}
//         </ul>
//       </>
//     )
//   }


