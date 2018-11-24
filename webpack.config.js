const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function createUglifyJsPlugin(isBeautify) {
  var bannerComments = '';
  return new UglifyJsPlugin({
    uglifyOptions: {
      compress: {
        warnings: false,
      },
      output: {
        // 是否不压缩
        beautify: isBeautify,
        // 不保留注释
        comments: false
      }
    },
    // 版权注释
    extractComments: {
      condition: function (astNode, comment) {
        if (/^\**!|Derry Li/i.test(comment.value)) {
          bannerComments = comment.value.substring(1);
          return true;
        }
        return false;
      },
      filename(file) { // file源文件名称。如果return相同名称可以理解为不单独提取一份
        return file;
      },
      banner(licenseFile) {
        return bannerComments;
      }
    }
    // extractComments: {
    //   condition: true,
    //   filename(file) { // file源文件名称。如果return相同名称可以理解为不单独提取一份
    //     return file;
    //   },
    //   banner(licenseFile) {
    //     var row = [
    //       `AMapJS - AMap高德地图加载模块`,
    //       "",
    //       "Copyright (c) 2018 Derry Li",
    //       "Released under the MIT License - https://github.com/derry-li/amap-js/LICENSE",
    //       "",
    //       "https://github.com/derry-li/amap-js",
    //     ]
    //     return `\n * ${row.join('\n * ')}\n`;
    //   }
    // }
  });
}

function generateConfig(name) {
  var uglify = name.indexOf('min') > -1;

  var webpackConfig = {
    mode: 'none',
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: name + '.js',
      library: 'AMapJS',
      libraryTarget: 'umd',
      libraryExport: 'default'
    },
    externals: {},
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'eslint-loader',
          enforce: 'pre',
          options: {
            formatter: require('eslint-friendly-formatter'),
            emitWarning: true
          }
        },
        {
          test: /\.(js)$/,
          exclude: /(node_modules|bower_components)/,
          use: 'babel-loader'
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
    ],
    // devServer: {
    //   contentBase: path.join(__dirname, "examples/browser"),
    //   compress: false,
    //   port: 9000,
    //   hot: true
    // }
  };

  if (uglify) {
    webpackConfig.plugins.push(
        createUglifyJsPlugin(false)
    );
  } else {
    webpackConfig.plugins.push(
        createUglifyJsPlugin(true)
    );
  }

  return webpackConfig;
};
var config = ['amap-js', 'amap-js.min'].map(function (key) {
  return generateConfig(key);
});

module.exports = config;
