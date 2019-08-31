import React, {createContext, useState } from 'react';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const IsJsonString=(str)=> {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true&&JSON.parse(str)!==null;
}
export const CartContext = createContext();
const CartContextProvider =(props)=>{
const [cart, setCart] = useState(IsJsonString(localStorage.getItem('cart'))? JSON.parse(localStorage.getItem('cart')):[]);
const addProduct = async( product) => {
  const joined = cart.concat(product);
  await sleep(10);
  setCart(joined);
  localStorage.setItem('cart',JSON.stringify(cart));
}

const removeProduct=async (product)=>{
  const index = cart.findIndex(item => item.name === product.name);
  //remove the index of the select product from store
  const newCart=  cart.filter((_, i) => i !== index);
  await sleep(10);
  setCart(newCart);
  localStorage.setItem('cart',JSON.stringify(cart));
}

  return (
    <CartContext.Provider value={{cart, addProduct,removeProduct}}>
      {props.children}
    </CartContext.Provider>
  );
}
 
export default CartContextProvider;
