// import logo from './logo.svg';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Suppliers from './components/suppliers/Suppliers';
import Home from './components/Home'
import Products from './components/products/Products'
import NavBar from './components/NavBar'
import Page404 from './Page404';
import ProductForm from './components/products/ProductForm';


function App() {
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
