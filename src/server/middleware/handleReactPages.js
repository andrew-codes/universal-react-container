import React from 'react';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router-dom';
import {renderToString} from 'react-dom/server';
import App from '../../components/App';
import renderFullPage from '../renderFullPage';
import createStore from './../createStore';
import {authenticate} from './../../modules/Security/server';

export default (req, res) => {
  const context = {};
  const store = createStore();
  store.dispatch(authenticate(req.session.token));

  let markup = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
      >
        <App />
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    res.redirect(301, context.url);
    return;
  }

  res
    .status(context.status || 200)
    .send(renderFullPage(markup, store.getState()));
};
