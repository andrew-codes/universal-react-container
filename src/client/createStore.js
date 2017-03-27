import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import SecurityModule, {Name as SecurityModuleName} from './../modules/Security';
import {isProduction} from './../env';

let composeEnhancers = compose;
if (!isProduction) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const reducer = combineReducers({
  [SecurityModuleName]: SecurityModule,
});

export default (initialState) => createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)))
