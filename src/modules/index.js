import {combineReducers} from 'redux';
import SecurityModule, {Name as SecurityModuleName} from './Security';

export default combineReducers({
  [SecurityModuleName]: SecurityModule,
});
