import { combineReducers } from 'redux';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
  authenticated: AuthReducer
});

export default rootReducer;
