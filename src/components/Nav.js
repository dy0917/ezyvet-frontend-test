import React from "react";
import {CartContext} from "../contexts/CartContext"
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <CartContext.Consumer>{(cartContext) => {
        const {cart} = cartContext;
        return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Cart" className="nav-link">
                Cart
                <span className="badge badge-light">
                  {cart.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
        )
      }}
        </CartContext.Consumer>
    );
  }
}