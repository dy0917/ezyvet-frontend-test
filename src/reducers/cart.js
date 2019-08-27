import {ADD_PRODUCT, REMOVE_PRODUCT, SET_CART} from '../actions/cartActions';
const initialState = [];

const cartReducer= (state = initialState, action)=>{
    switch (action.type) {
        case ADD_PRODUCT:
            return [
              ...state,
              action.product
            ]
        case REMOVE_PRODUCT:
            //find index of the select product
            const index = state.findIndex(item => item.name === action.product.name);
            //remove the index of the select product from store
            return state.filter((_, i) => i !== index);
        case SET_CART:
            return action.cart;
        default:
            return state;
    }
};

export default cartReducer;

