const { merge } = require("webpack-merge");
const webpackConfig = require("./webpack.config");

module.exports = merge(webpackConfig, {
  devtool: "cheap-source-map",
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  }
});
