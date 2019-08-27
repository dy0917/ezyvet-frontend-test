import { createStore, combineReducers, applyMiddleware } from 'redux'
import productReducer from '../reducers/products'
import cartReducer from '../reducers/cart'
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
    products: productReducer,
    cart: cartReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(rootReducers,
    composeEnhancer(applyMiddleware(thunk))
    )

export default store