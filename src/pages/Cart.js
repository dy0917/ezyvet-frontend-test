import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from 'reselect'
import { toDecimal } from "../utils/common";
import { removeProduct } from "../actions/cartActions";
import _ from "lodash";

const groupByProductName =
  createSelector(
    cart => cart,
    (cart) => {
      return _.chain(cart)
        .groupBy("name")
        .map((value, key) => ({
          name: key,
          price: value[0].price,
          products: value
        }))
        .value()
      }
  )

export default ()=> {
  const cart = useSelector(state => state.cart);
  const productGroups = useSelector(state=>groupByProductName(state.cart))

  const dispatch = useDispatch();
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
            {productGroups.map((p, i) => {
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
                      onClick={e => dispatch(removeProduct(p))
                      }
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
    );
  }

