module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: false,
    "jest/globals": true
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  extends: [
    "plugin:prettier/recommended"
  ],
  plugins: [
    "prettier",
    "jest"
  ],
  rules: {
    "prettier/prettier": "error"
  },
}
