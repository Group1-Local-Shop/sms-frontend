import React, { useState } from 'react';
import { Link ,useLocation} from 'react-router-dom'


    export default function NavBar() {
    const location =useLocation()
     const {pathname}=location
     const splitPath= pathname.split('/')[1]
    return (
        <header className='header'>
      <div>
        <Link className='links2' to='/'>
          LocalShop
        </Link>
      </div>

      <nav className='navba'>
        <ul>
             <Link className={`links ${splitPath===''? 'active-link':''}`} to='/about'>
                About us
        </Link>
        <Link className={`links ${splitPath==='merchantLogin'? 'active-link':''}`}to='/merchantLogin'>
                Merchants
        </Link>
       <Link className={`links ${splitPath==='adminlogin'? 'active-link':''}`} to='adminlogin'>
                 Admins
         </Link>
         
          <Link  className={`links ${splitPath==='login'? 'active-link':''}`}to='/login'>
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

