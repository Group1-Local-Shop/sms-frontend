import React, { useState } from 'react';
import { Link } from 'react-router-dom'
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

        <header className='header'>
      <div>
        <Link className='links2' to='/'>
          LocalShop
        </Link>
      </div>

      <nav className='navba'>
        <ul>
             <Link className='links' to='/about'>
                About us
        </Link>
        <Link className='links' to='/merchantLogin'>
                Merchants
        </Link>
       <Link className='links' to='adminlogin'>
                 Admins
         </Link>
         
          <Link  className='links' to='/login'>
                Clerks
         </Link>
        </ul>
      </nav>
    </header>
        // <MDBNavbar expand='lg' light bgColor='light'>
        // <MDBContainer fluid>
        //     <MDBNavbarBrand href='/'>LocalShop</MDBNavbarBrand>
        //     <MDBNavbarToggler
        //     type='button'
        //     aria-expanded='false'
        //     aria-label='Toggle navigation'
        //     onClick={() => setShowNav(!showNav)}
        //     >
        //     <MDBIcon icon='bars' fas />
        //     </MDBNavbarToggler>
        //     <MDBCollapse navbar show={showNav}>
        //     <MDBNavbarNav>
        //         <MDBNavbarItem>
        //         <MDBNavbarLink aria-current='page' href='/'>
        //             Home
        //         </MDBNavbarLink>
        //         </MDBNavbarItem>
        //         <MDBNavbarItem>
        //         <MDBNavbarLink href='/products'>Products</MDBNavbarLink>
        //         </MDBNavbarItem>
        //         <MDBNavbarItem>
        //         <MDBNavbarLink href='/suppliers'>Suppliers</MDBNavbarLink>
        //         </MDBNavbarItem>
                 
        //         <MDBNavbarItem>
        //         <MDBNavbarLink href='/merchantLogin'>MerchantLogin</MDBNavbarLink>
        //         </MDBNavbarItem>
                
        //         <MDBNavbarItem>
        //         <MDBNavbarLink href='/adminlogin'> adminLogin</MDBNavbarLink>
        //         </MDBNavbarItem>
        //         <MDBNavbarItem>
        //         <MDBNavbarLink href='/admin'> Admin</MDBNavbarLink>
        //         </MDBNavbarItem>

        <MDBNavbar  expand='lg' light bgColor='dark'>
        <MDBContainer fluid>
            <MDBNavbarBrand style={{color : "white"}} href='/'>LocalShop</MDBNavbarBrand>
            <MDBNavbarToggler
            type='button'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNav(!showNav)}
            >
            <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBCollapse navbar show={showNav}>
            <MDBNavbarNav style={{color : "white"}}>
                <MDBNavbarItem>
                <MDBNavbarLink style={{color : "white"}} aria-current='page' href='/'>
                    Home
                </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink style={{color : "white"}} href='/products'>Products</MDBNavbarLink>
                </MDBNavbarItem>
                {/* <MDBNavbarItem>
                <MDBNavbarLink href='/suppliers'>Suppliers</MDBNavbarLink>
                </MDBNavbarItem> */}
                
                <MDBNavbarItem>
                <MDBNavbarLink style={{color : "white"}} href='/merchantLogin'>MerchantLogin</MDBNavbarLink>
                </MDBNavbarItem>
                
                <MDBNavbarItem>
                <MDBNavbarLink style={{color : "white"}} href='/adminlogin'> adminLogin</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink style={{color : "white"}} href='/admin'> Admin</MDBNavbarLink>
                </MDBNavbarItem>


               
        //         {/* <MDBNavbarItem>
        //         <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
        //             Disabled
        //         </MDBNavbarLink>
        //         </MDBNavbarItem> */}
        //     </MDBNavbarNav>
        //     </MDBCollapse>
        // </MDBContainer>
        // </MDBNavbar>
    );
}

