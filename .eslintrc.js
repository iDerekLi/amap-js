module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  extends: [
    "plugin:prettier/recommended"
  ],
  plugins: [
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error"
  }
}
