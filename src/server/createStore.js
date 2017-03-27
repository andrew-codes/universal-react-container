import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './../modules';
import {isProduction} from './../env';

let composeEnhancers = compose;
if (!isProduction) {
  composeEnhancers = require('remote-redux-devtools').default;
}
export default () => createStore(reducer, composeEnhancers(applyMiddleware()));
