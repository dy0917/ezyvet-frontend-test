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
            const index = state.findIndex(item => item.name === action.product.name);
            return state.filter((_, i) => i !== index);
        case SET_CART:
            state = action.cart;
            return state;
        default:
            return state;
    }
};

export default cartReducer;

