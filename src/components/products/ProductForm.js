import React from 'react';
import { MDBInputGroup, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle } from 'mdb-react-ui-kit';


function ProductForm() {
const handleSubmit=(e)=>{
        e.preventDefault();
        fetch("http://localhost:3000/products",{
            method:"POST",
          headers: {
            "Content-Type": "application/json",
           Accept: "application/json"
        },})}

    /*  https://www.geeksforgeeks.org/how-to-pass-data-into-table-from-a-form-using-react-components/   */

    return (
        <>
            <MDBInputGroup className='mb-3'>
                <MDBDropdown>
                <MDBDropdownToggle>Product</MDBDropdownToggle>
                <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                    <MDBDropdownItem divider />
                    <MDBDropdownItem link>Separated link</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
                <input className='form-control' type='text' />
                <input className='form-control' type='text' />
                <input className='form-control' type='text' />
            </MDBInputGroup>
        </>
    )
}

export default ProductForm;
