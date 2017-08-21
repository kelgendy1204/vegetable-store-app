import { combineReducers } from 'redux';
import LoggedInReducer from './reducer_loggedin';

const rootReducer = combineReducers({
	loggedIn : LoggedInReducer
});

export default rootReducer;