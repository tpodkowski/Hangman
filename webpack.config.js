const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const extractTextPluginConfig = new ExtractTextPlugin({
  filename: 'style.css',
  allChunks: true
});

module.exports = {
  entry: [
    path.resolve(__dirname, 'src', 'index.js'),
    path.resolve(__dirname, 'src', 'styles', 'imports.scss')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /.\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      }, {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: 'file-loader'
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    htmlWebpackPluginConfig,
    extractTextPluginConfig
  ]
};
