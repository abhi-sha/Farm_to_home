import React from 'react'

import { Route, Routes } from 'react-router-dom'
import "./App.css";
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { CartProvider } from './components/ContextReducer';
import Cart from './Pages/Cart';


const App = () => {
  return (
    <div>
      <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
        
        <Route path="/loginuser" element={<Login />} />
        <Route path="/createuser" element={<Signup />} />

      </Routes>
      </CartProvider>
    </div>
  );
}

export default App
