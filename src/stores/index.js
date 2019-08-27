import { createStore, combineReducers } from 'redux'
import productReducer from '../reducers/products'
import cartReducer from '../reducers/cart'

const rootReducers = combineReducers({
    products: productReducer,
    cart: cartReducer
})
const store = createStore(rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store