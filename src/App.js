// import logo from './logo.svg';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Suppliers from './components/suppliers/Suppliers';
import Home from './components/Home'
import Products from './components/products/Products'
import NavBar from './components/NavBar'
import Page404 from './Page404';
import ProductForm from './components/products/ProductForm';

import AddAdmins from './components/superuser/AddAdmins';
import { useState,useEffect } from 'react';
import Merchant from './components/merchant/Merchant';
import Clerk from './components/clerks/Clerk';
import Login from './components/Login';
import ClerkLogin from './components/clerks/ClerkLogin';
import MerchantLogin from './components/merchant/MerchantLogin';
import Landing from './components/admin/Landing'
import Prods from './components/admin/Prods'
import ClerkList from './components/admin/ClerkList'
import AddClerks from './components/admin/AddClerks'





function App() {

  // const [product, setProduct] = useState([])
  // const [store, setStore] = useState([])


  // function getProduct(){
  //   fetch("http://localhost:3000/products")
  //   .then(res => res.json())
  //   .then(product => setProduct(product))
  // }

  // useEffect(() => {
  //   getProduct();
  // }, [])

  // function getStore(){
  //   fetch("http://localhost:3000/stores")
  //   .then(res => res.json())
  //   .then(store => setStore(store))
  // }
  // useEffect(() => {
  //   getStore();
  // }, []);
  return (
    <>
      <header>
        <NavBar />
      </header>
     
      
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/products' element={ <Products /> }>
          <Route path='productform' element={<ProductForm/>} />
        </Route>
        <Route path ='Adminsignup' element={<AddAdmins/>}/>
        <Route path='/suppliers' element={ <Suppliers /> } />
        <Route path='merchant' element={ <Merchant/>}/>
        <Route path="clerk" element={<Clerk/>}/>
         <Route path="adminlogin" element={<Login/>}/>
         <Route path="login" element={<ClerkLogin/>}/>
           <Route path="merchantLogin" element={<MerchantLogin/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/prods' element={<Prods/>}/>
        <Route path='/clerk-list' element={<ClerkList/>}/>
        <Route path='/add-clerk' element={<AddClerks/>}/>
        <Route path='*' element={<Page404 />} />

      </Routes>
    </>
  );
}

export default App;
