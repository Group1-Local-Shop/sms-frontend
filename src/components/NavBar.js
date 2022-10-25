// // import React, { useState } from 'react';
// import React from 'react';
// import {Link} from 'react-router-dom'
// // import {
// //     MDBCollapse,
// //     MDBDropdown,
// //     MDBDropdownMenu,
// //     MDBDropdownToggle,
// //     MDBDropdownItem,
// // } from 'mdb-react-ui-kit';

// function NavBar () {

//     return (
//         <nav>
//             <Link to='/'>Home</Link>
//             <Link to='/products'>Products</Link>
//             <Link to='/suppliers'>Suppliers</Link>
//         </nav>
//     )
// }

// export default NavBar

import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon
    } from 'mdb-react-ui-kit';

    export default function NavBar() {
    const [showNav, setShowNav] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
            <MDBNavbarBrand href='/'>LocalShop</MDBNavbarBrand>
            <MDBNavbarToggler
            type='button'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNav(!showNav)}
            >
            <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBCollapse navbar show={showNav}>
            <MDBNavbarNav>
                <MDBNavbarItem>
                <MDBNavbarLink aria-current='page' href='/'>
                    Home
                </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink href='/products'>Products</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink href='/suppliers'>Suppliers</MDBNavbarLink>
                </MDBNavbarItem>
                {/* <MDBNavbarItem>
                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                    Disabled
                </MDBNavbarLink>
                </MDBNavbarItem> */}
            </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
        </MDBNavbar>
    );
}

