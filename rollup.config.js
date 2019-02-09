// import rollup from "rollup";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import json from 'rollup-plugin-json';
import babel from "rollup-plugin-babel";
import { eslint } from "rollup-plugin-eslint";
import { terser } from "rollup-plugin-terser";

const pkg = require("./package.json");

const banner = (function() {
  const row = [
    `AMapJS v${pkg.version}`,
    "",
    "Copyright (c) 2018 Derek Li",
    "Released under the MIT License - https://choosealicense.com/licenses/mit/",
    "",
    "https://github.com/iDerekLi/amap-js"
  ];
  return ["/*!", ...row.map(r => `* ${r}`), "*/"].join("\n ");
})();
function getBaseConfig() {
  const baseConfig = {
    input: "src/amap-js.js",
    plugins: [
      json(),
      resolve({
        jsnext: false, // 该属性是指定将Node包转换为ES2015模块
        // main 和 browser 属性将使插件决定将那些文件应用到bundle中
        main: true, // Default: true
        browser: true // Default: false
      }),
      commonjs(),
      eslint({
        include: "src/**",
        exclude: "node_modules/**",
        throwOnWarning: true
      }),
      babel({
        exclude: "node_modules/**"
      })
    ],
    watch: {
      include: "src/**",
      exclude: "node_modules/**"
    }
  };
  return baseConfig;
}

function TerserPlugin(minimizer) {
  return terser({
    ie8: true,
    keep_fnames: !minimizer, // 是否保持原变量名
    compress: {
      warnings: false,
      drop_console: false, // 删除所有的 `console` 语句，可以兼容ie浏览器
      reduce_vars: false // 内嵌定义了但是只用到一次的变量
    },
    output: {
      beautify: !minimizer, // 是否不进行压缩
      comments: minimizer ? /Copyright|Derek Li/ : true // 是否保留注释
    }
  });
}

export default ["amap-js", "amap-js.min", "amap-js.esm"].map(filename => {
  switch (filename) {
    case "amap-js": {
      const config = Object.assign(getBaseConfig(), {
        output: {
          format: "umd",
          name: "AMapJS",
          file: "dist/amap-js.js",
          banner,
          indent: true
        }
      });
      config.plugins.push(TerserPlugin(false));
      return config;
    }
    case "amap-js.min": {
      const config = Object.assign(getBaseConfig(), {
        output: {
          format: "umd",
          name: "AMapJS",
          file: "dist/amap-js.min.js",
          banner,
          indent: true
        }
      });
      config.plugins.push(TerserPlugin(true));
      return config;
    }
    case "amap-js.esm": {
      const config = Object.assign(getBaseConfig(), {
        output: {
          format: "es",
          file: "dist/amap-js.esm.js",
          banner: banner + "\n/* eslint-disable */",
          indent: true
        }
      });
      config.plugins.push(TerserPlugin(false));
      return config;
    }
  }
});
