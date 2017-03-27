import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import SecurityModule, {Name as SecurityModuleName} from './../modules/Security/server';
import {isProduction} from './../env';

let composeEnhancers = compose;
if (!isProduction) {
  composeEnhancers = require('remote-redux-devtools').default;
}
const reducer = combineReducers({
  [SecurityModuleName]: SecurityModule,
});
export default () => createStore(reducer, composeEnhancers(applyMiddleware()));
