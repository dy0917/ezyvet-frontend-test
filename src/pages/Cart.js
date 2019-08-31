import React,{useContext} from "react";
import { toDecimal } from "../utils/common";
import {CartContext} from "../contexts/CartContext"
import _ from "lodash";

   const groupByProductName=(cart) =>{
          // group up product by their names
          // Map these group into an object has name, price, and a list a product
          const groupsOfProduct = _.chain(cart)
            .groupBy("name")
            .map((value, key) => ({
              name: key,
              price: value[0].price,
              products: value
            }))
            .value();
          return groupsOfProduct;
        }
export default function Cart() {

  const {cart,removeProduct} = useContext(CartContext);
    return (
      <div className="container">
        <h4 className="align-content-center">Cart</h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {groupByProductName(cart).map((p, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i}</th>
                  <td>{p.name}</td>
                  <td>{toDecimal(p.price)}</td>
                  <td>{p.products.length}</td>
                  <td>{toDecimal(_.sumBy(p.products, "price"))}</td>
                  <td>
                    <button
                      className="btn btn-sm"
                      onClick={e=>{removeProduct(p)}}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td colSpan="5">
                <div className="float-right">Total:</div>
              </td>
              <td>{toDecimal(_.sumBy(cart, "price"))}</td>
            </tr>
          </tbody>
        </table>
      </div>
     

        )
}

