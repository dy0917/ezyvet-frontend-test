import React from "react";
import {ProductContext} from "../contexts/ProductContext"
import {CartContext} from "../contexts/CartContext"
import { toDecimal } from "../utils/common";

 class Products extends React.Component {
  render() {
     return(
      <ProductContext.Consumer>{(productsContext) => (
        <CartContext.Consumer>{(cartContext) => {
          const {products} = productsContext;
          const {addProduct} = cartContext;
          return (
      <div className="container">
        <h4 className="align-content-center">Products</h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          {products.map((p, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i}</th>
                  <td>{p.name}</td>
                  <td>{toDecimal(p.price)}</td>
                  <td>
                    <button
                      className="btn btn-sm"
                      onClick={e => addProduct(p)}
                    >
                      Add
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
          )
      }}
      </CartContext.Consumer>
      )}
      </ProductContext.Consumer>
    );
  }
}

export default Products;