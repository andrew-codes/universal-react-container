import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './../modules';
import {isProduction} from './../env';

let composeEnhancers = compose;
if (!isProduction) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

export default () => createStore(reducer, composeEnhancers(applyMiddleware()))
