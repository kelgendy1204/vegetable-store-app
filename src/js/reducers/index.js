import { combineReducers } from 'redux';
// import loggedIn from './reducer_loggedin';
import cartItems from './reducer_cartItems';
import categories from './reducer_categories';

const rootReducer = combineReducers({
    cartItems,
    categories
});

export default rootReducer;