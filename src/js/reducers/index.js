import { combineReducers } from 'redux';
// import loggedIn from './reducer_loggedin';
import cartItems from './reducer_cartItems';
import categories from './reducer_categories';
import activeCategory from './reducer_activeCategory';
import filteredBy from './reducer_filterBy';

const rootReducer = combineReducers({
    cartItems,
    categories,
    activeCategory,
    filteredBy
});

export default rootReducer;