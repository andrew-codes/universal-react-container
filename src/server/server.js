import express from 'express';
import session from 'express-session';
import path from 'path';
import React from 'react';
import handleLogin from './middleware/handleLogin';
import handleReactPages from './middleware/handleReactPages';
import {isProduction} from './../env';

const port = process.env.PORT || 3001;
const app = express();
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
  }
}));

if (!isProduction) {
  const webpack = require('webpack');
  const webpackConfig = require('./../../webpack.config');

  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    hot: true,
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    reload: true,
  }));

  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
}

app.use('/static', express.static(path.join(__dirname, '..', 'static')));
app.post('/api/login', handleLogin);
app.use(handleReactPages);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

export default app;
