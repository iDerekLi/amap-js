const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const PACKAGE = require("./package.json");
const polyfill = require("./polyfill.js");

function generateConfig(name) {
  const webpackConfig = {
    mode: "production",
    entry: [...polyfill, "./src/amap-js.js"],
    output: {
      path: path.resolve(__dirname, "lib"),
      filename: name + ".js",
      library: "AMapJS",
      libraryTarget: "umd",
      umdNamedDefine: true
    },
    resolve: {
      extensions: [".js", ".json"],
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@loaders": path.resolve(__dirname, "./src/loaders")
      }
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /(node_modules|bower_components)/,
          enforce: "pre",
          use: [
            {
              loader: "eslint-loader",
              options: {
                formatter: require("eslint-friendly-formatter"),
                emitWarning: true
              }
            }
          ]
        },
        {
          test: /\.(js)$/,
          exclude: /(node_modules|bower_components)/,
          use: ["babel-loader"]
        }
      ]
    },
    optimization: {
      minimize: true,
      minimizer: []
    },
    plugins: [
      new CleanWebpackPlugin(["lib"]),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        },
        VERSION: JSON.stringify(PACKAGE.version)
      }),
      // 版权注释
      new webpack.BannerPlugin({
        banner: (function() {
          const row = [
            `AMapJS v${PACKAGE.version}`,
            "",
            `Copyright (c) 2018 Derek Li`,
            "Released under the MIT License - https://choosealicense.com/licenses/mit/",
            "",
            "https://github.com/iDerekLi/amap-js"
          ];
          return row.join("\n");
        })(),
        entryOnly: true
      })
    ],
    externals: {}
  };
  return webpackConfig;
}

module.exports = function(env = {}) {
  function createTerserPlugin(isBeautify) {
    return new TerserPlugin({
      cache: true, // 是否开启缓存
      parallel: 4, // 是否开启多线程, [true,false,number]
      sourceMap: false, // 是否输出map
      terserOptions: {
        ie8: true,
        keep_fnames: env.dev ? true : false, // 是否保持原变量名
        compress: {
          warnings: false,
          drop_console: false, // 删除所有的 `console` 语句，可以兼容ie浏览器
          reduce_vars: false // 内嵌定义了但是只用到一次的变量
        },
        output: {
          beautify: !isBeautify, // 是否不进行压缩
          comments: env.dev ? true : /Copyright|Derek Li/ // 是否保留注释
        }
      }
    });
  }

  if (env.dev) {
    // 开发模式
    return ["amap-js"].map(filename => {
      const config = generateConfig(filename);
      const uglify = filename.indexOf("min") > -1;
      config.optimization.minimizer.push(createTerserPlugin(uglify));
      return config;
    });
  } else {
    // 产品模式
    return ["amap-js", "amap-js.min"].map(filename => {
      const config = generateConfig(filename);
      const uglify = filename.indexOf("min") > -1;
      config.optimization.minimizer.push(createTerserPlugin(uglify));
      return config;
    });
  }
};
