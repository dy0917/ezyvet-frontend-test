import React from "react";
import Routes from "./routes";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { SET_CART } from "./actions/cartActions";
import Nav from "./components/Nav";
class App extends React.Component {
  constructor(props) {
    super(props);
    try {
      //Check is valid json object
      const cart = JSON.parse(localStorage.getItem("cart"));
      if (cart) {
        // load cart data from local storage
        this.props.setCart(cart);
      }
    } catch (e) {}
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch => {
  return {
    setCart: cart => {
      dispatch({ type: SET_CART, cart });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
