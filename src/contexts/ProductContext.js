import React, { createContext,useState } from 'react';

export const ProductContext = createContext();
const ProductContextProvider =(props)=>{
 const [products] =useState([
  {
    name: "Sledgehammer",
    price: 125.75
  },
  {
    name: "Axe",
    price: 190.5
  },
  {
    name: "Bandsaw",
    price: 562.13
  },
  {
    name: "Chisel",
    price: 12.9
  },
  {
    name: "Hacksaw",
    price: 18.45
  }
])
  return (
    <ProductContext.Provider value={{products}}>
      {props.children}
    </ProductContext.Provider>
  )
}
 
export default ProductContextProvider;
