import {combineReducers} from 'redux';
import securityReducer from './Security';

export default combineReducers({
  Security: securityReducer,
});
