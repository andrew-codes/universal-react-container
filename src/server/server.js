import express from 'express';
import React from 'react';
import handleReactPages from './middleware/handleReactPages';
import unless from './middleware/unless';
import {isProduction} from './../env';

const port = process.env.PORT || 3001;
const app = express();

const staticUrls = [
  /^\/static/,
];
if (!isProduction) {
  staticUrls.push(/^\/__webpack_hmr/);
}
app.use(express.static('static'));
app.use(unless(staticUrls, handleReactPages));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

export default app;
