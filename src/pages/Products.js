import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProductAsync } from "../actions/cartActions";
import { toDecimal } from "../utils/common";

export default () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
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
                      onClick={e => dispatch(addProductAsync(p))}
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
  );
};
