import { combineReducers } from 'redux';
import loggedIn from './reducer_loggedin';

const rootReducer = combineReducers({
	loggedIn
});

export default rootReducer;