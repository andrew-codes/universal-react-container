import express from 'express';
import path from 'path';
import React from 'react';
import handleReactPages from './middleware/handleReactPages';
import {isProduction} from './../env';

const port = process.env.PORT || 3001;
const app = express();

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
app.use(handleReactPages);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

export default app;
