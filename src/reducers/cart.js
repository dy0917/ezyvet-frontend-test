const initialState = [];

const cartReducer= (state = initialState, action)=>{
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [
              ...state,
              action.product
            ]
        default:
            return state;
    }
};

export default cartReducer;

