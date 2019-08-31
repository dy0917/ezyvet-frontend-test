import React, { Component, createContext } from 'react';

export const CartContext = createContext();

class CartContextProvider extends Component {
  state = {
    cart:[
    ]
  }
  addCart = (product) => {
    const joined = this.state.cart.concat(product);
    this.setState({ cart: joined });
  }

  render() { 
    return (
      <CartContext.Provider value={{...this.state, addCart:this.addCart}}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
 
export default CartContextProvider;
