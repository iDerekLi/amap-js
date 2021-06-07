module.exports = {
  env: {
    browser: true,
    es6: true,
    es2017: true,
    node: true,
    "jest/globals": true
  },
  extends: ["standard", "plugin:prettier/recommended"],
  plugins: ["prettier", "markdown", "jest"],
  rules: {
    "prettier/prettier": "error",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "no-async-promise-executor": "off",
    "prefer-promise-reject-errors": "off"
  },
  overrides: [
    {
      files: ["**/*.md"],
      processor: "markdown/markdown"
    },
    {
      files: ["**/*.md/*.js"],
      rules: {
        "no-undef": "off"
      }
    }
  ]
};
