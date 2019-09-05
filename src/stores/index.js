import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "../reducers/products";
import cartReducer from "../reducers/cart";
import thunk from "redux-thunk";
import {saveState} from "../localStorage";
import _ from "lodash";

const rootReducers = combineReducers({
  products: productReducer,
  cart: cartReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(
  rootReducers,
  composeEnhancer(applyMiddleware(thunk))
);

store.subscribe(_.throttle(() => {
  saveState({
    state: store.getState()
  });
}, 10));


export default store;
