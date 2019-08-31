import React, { Component, createContext } from 'react';

export const ProductContext = createContext();

class ProductContextProvider extends Component {
  state = {
    products:[
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
    ]
  }
  render() { 
    return (
      <ProductContext.Provider value={{...this.state}}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
 
export default ProductContextProvider;
