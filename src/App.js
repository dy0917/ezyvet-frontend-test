import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from './contexts/ProductContext';
import CartContextProvider from './contexts/CartContext';
import Nav from "./components/Nav";
export default function App(){
    return (
      <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
        <BrowserRouter>
          <Nav />
          <Routes />
        </BrowserRouter>
        </CartContextProvider>
      </ProductContextProvider>
      </div>
    );
  }
