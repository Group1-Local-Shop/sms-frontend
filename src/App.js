// import logo from './logo.svg';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Suppliers from './components/suppliers/Suppliers';
import Home from './components/Home'
import Products from './components/products/Products'
import NavBar from './components/NavBar'
import Page404 from './Page404';
import ProductForm from './components/products/ProductForm';
import { useEffect } from 'react';
import { useState } from 'react';


function App() {

  const [product, setProduct] = useState([])
  const [store, setStore] = useState([])


  function getProduct(){
    fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(product => setProduct(product))
  }

  useEffect(() => {
    getProduct();
  }, [])

  function getStore(){
    fetch("http://localhost:3000/stores")
    .then(res => res.json())
    .then(store => setStore(store))
  }
  useEffect(() => {
    getStore();
  }, []);
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
        <Route path='/suppliers' element={ <Suppliers /> } />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
