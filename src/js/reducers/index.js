import { combineReducers } from 'redux';
// import loggedIn from './reducer_loggedin';
import cartItems from './reducer_cartItems';
import shopCarts from './reducer_shopcarts';

const rootReducer = combineReducers({
    cartItems,
    shopCarts
});

export default rootReducer;