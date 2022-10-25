import React from 'react';
import { MDBInputGroup, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle } from 'mdb-react-ui-kit';


function ProductForm() {

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
