import React, { Component, createContext } from 'react';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
export const CartContext = createContext();

class CartContextProvider extends Component {
  state = {
    cart:[
    ]
  }
  addProduct = async(product) => {
    const joined = this.state.cart.concat(product);
    await sleep(10);
    this.setState({ cart: joined });
  }

  removeProduct=(product)=>{
    const index = this.state.cart.findIndex(item => item.name === product.name);
    //remove the index of the select product from store
    const newCart=  this.state.cart.filter((_, i) => i !== index);
    await sleep(10);
    this.setState({ cart: newCart });
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
