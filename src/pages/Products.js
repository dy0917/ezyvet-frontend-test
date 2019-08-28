import React from "react";
import { connect } from "react-redux";
import { setCart, addProductAsync } from "../actions/cartActions";
import { toDecimal } from "../utils/common";

class Products extends React.Component {
  addClick = async (e, p) => {
    e.stopPropagation(); //stop init adding item
    await this.props.addProduct(p);
  };
  componentDidUpdate() {
    localStorage.setItem("cart", JSON.stringify(this.props.cart));
  }

  render() {
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
            {this.props.products.map((p, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i}</th>
                  <td>{p.name}</td>
                  <td>{toDecimal(p.price)}</td>
                  <td>
                    {" "}
                    <button
                      className="btn btn-sm"
                      onClick={e => this.addClick(e, p)}
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
  }
}

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => {
      return dispatch(addProductAsync(product));
    },
    setCart: cart => {
      setCart(cart);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
