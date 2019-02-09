module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        loose: true, // true
        useBuiltIns: false // "usage"
      }
    ]
  ],
  plugins: ["@babel/plugin-external-helpers"]
};
