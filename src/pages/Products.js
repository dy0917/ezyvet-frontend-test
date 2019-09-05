import React from "react";
import { useSelector } from "react-redux";
import { setCart, addProductAsync } from "../actions/cartActions";
import { toDecimal } from "../utils/common";

export default () => {
  const products = useSelector(state => state.products);
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
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
