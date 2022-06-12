import React, { useContext, useState } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes/Routes.js';
import CartContext from './components/ItemsComponents/ItemContext/CartContext.js';
import { CartContextProvider } from './components/ItemsComponents/ItemContext/CartContext.js';

function App() {

  return (
    <CartContextProvider>
      <Routes />
    </CartContextProvider>
  );
}

export default App;
