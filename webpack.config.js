const { resolve } = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

require('@babel/register');

module.exports = {
  mode:'development',
  entry: './src/app/app.js',
  output: {
    filename: 'app.min.js',
    path: resolve(__dirname, 'dist/'),
  },
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    compress: false,
    overlay: false,
    port: 8888,
    historyApiFallback: true,
    hot: false,
    inline: true,
    host: 'localhost',
    disableHostCheck: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          "css-loader"
        ],
      },
    ]
  },
  resolve: {
    extensions: [".vue", ".js"]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/app/app.html"
    })
  ]
};
