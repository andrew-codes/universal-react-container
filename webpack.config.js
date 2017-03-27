const path = require('path');
const webpack = require('webpack');

const srcDir = path.resolve(__dirname, 'src');
const distDir = path.resolve(__dirname, 'dist');
const env = process.env.NODE_ENV || 'production';
const isProduction = env === 'production';

const config = {
  entry: [
    path.join(srcDir, 'client', 'app.js'),
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(distDir, 'static'),
    publicPath: '/static/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          srcDir,
        ],
        exclude: [
          /node_modules/,
          path.join(srcDir, 'server'),
        ]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
  resolve: {
    alias: {
      joi: 'joi-browser',
    },
    modules: [
      srcDir,
      'node_modules'
    ],
    extensions: [
      '.js',
    ]
  },
  devtool: false,
};

if (!isProduction) {
  config.devtool = 'cheap-eval-source-map';
  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
  ]);
  config.entry = [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
  ].concat(config.entry);
}

module.exports = config;
