module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // enable sub-packages to find babel config
          options: {
            rootMode: 'upward',
          },
        },
      },
    ],
  },
  performance: {
    hints: false,
  },
  plugins: [],
};
