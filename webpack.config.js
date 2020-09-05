const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  // archivo de mi app threejs.
  entry: "./src/app.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: 'Mi animacióñ 3d',
      filename: 'index.html'
    })
  ]
};
