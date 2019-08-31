import React, { Component, createContext } from 'react';

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
class CartContextProvider extends Component {
  state = {
    cart: IsJsonString(localStorage.getItem('cart'))? JSON.parse(localStorage.getItem('cart')):[]
  }
  addProduct = async( product) => {
    const joined = this.state.cart.concat(product);
    await sleep(10);
    this.setState({ cart: joined });
    localStorage.setItem('cart',JSON.stringify(this.state.cart));
  }

  removeProduct=async (product)=>{
    const index = this.state.cart.findIndex(item => item.name === product.name);
    //remove the index of the select product from store
    const newCart=  this.state.cart.filter((_, i) => i !== index);
    await sleep(10);
    this.setState({ cart: newCart });
    localStorage.setItem('cart',JSON.stringify(this.state.cart));
  }

  render() { 
    return (
      <CartContext.Provider value={{...this.state, addProduct:this.addProduct,removeProduct:this.removeProduct}}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
 
export default CartContextProvider;
