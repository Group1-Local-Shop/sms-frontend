import React from "react"
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
import { Link, Outlet } from 'react-router-dom'


function Products() {


    return (

        <>
        <br/>
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
                        ## the table is to be deleted. using fetch the table should be filled##
                        ## https://www.makeuseof.com/react-generate-table-from-json/ ###
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


