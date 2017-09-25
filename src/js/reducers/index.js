import { combineReducers } from 'redux';
import loggedIn from './reducer_loggedin';
import cartItems from './reducer_cartItems';

const rootReducer = combineReducers({
    cartItems
});

export default rootReducer;