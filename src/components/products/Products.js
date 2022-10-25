import React from "react"
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom'
// import ProductForm from "./ProductForm";
import { Link, Outlet } from 'react-router-dom'


function Products() {

    const navigator = useNavigate()

    return (

        <>
        <br/>
        {/* <div style={{ marginRight: "auto" }}>
            <MDBBtn>Add</MDBBtn>
        </div> */}
            <MDBContainer fluid>
                <h3>Products List</h3>
                <nav>
                    <Link to='productform'>
                        <MDBBtn color="primary" className="position-relative">
                        Add
                            <span
                                className="position-absolute top-0 start-100 translate-middle badge border border-light">
                            </span>
                        </MDBBtn>
                    </Link> 
                </nav>
                
                
                <Outlet/>
                <MDBTable>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>In Stock</th>
                        <th scope='col'>Received</th>
                        <th scope='col'>Buying Price</th>
                        <th scope='col'>Selling Price</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                        <th scope='row'>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope='row'>2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        </tr>
                        {/* <tr>
                        <th scope='row'>3</th>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                        </tr> */}
                    </MDBTableBody>
                </MDBTable>
            </MDBContainer>
            
        </>

    )
}

export default Products


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


