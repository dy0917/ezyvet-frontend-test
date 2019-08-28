export const ADD_PRODUCT = "CART/ADD_PRODUCT";
export const REMOVE_PRODUCT = "CART/REMOVE_PRODUCT";
export const SET_CART = "CART/SET_CART";
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export function addProduct(product) {
  return { type: ADD_PRODUCT, product };
}

export function removeProduct(product) {
  return { type: REMOVE_PRODUCT, product };
}

export function setCart(cart) {
  return { type: SET_CART, cart };
}

export function addProductAsync(product) {
  return async function(dispatch) {
    await sleep(10);
    dispatch(addProduct(product));
  };
}
