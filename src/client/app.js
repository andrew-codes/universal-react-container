import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './../components/App';
import createStore from './createStore';

const store = createStore(window.__PRELOADED_STATE__);
ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
