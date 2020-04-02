const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(config, {
  entry: {
    app: './examples/es/main.js',
  },
  devServer: {
    open: true,
    progress: true,
    host: '0.0.0.0',
    stats: 'errors-only',
    disableHostCheck: true,
    historyApiFallback: true,
  },
  output: {
    path: path.join(__dirname, '../examples/es-dist'),
    publicPath: '/',
    chunkFilename: 'async_[name].js',
  },
  resolve: {
    alias: {
      'amap-js': path.join(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        sideEffects: true,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        chunks: {
          chunks: 'all',
          minChunks: 2,
          minSize: 0,
          name: 'chunks',
        },
      },
    },
  },
  plugins: [
    new WebpackBar(),
    new FriendlyErrorsPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['chunks', 'app'],
      template: path.join(__dirname, '../examples/es/index.html'),
      filename: 'index.html',
    }),
  ],
});
