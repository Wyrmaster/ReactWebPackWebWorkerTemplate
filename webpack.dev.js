const path = require('path');
const config = require('./webpack.config');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
  mode: 'development',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'Build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'Source', 'Index.html'),
      filename: 'index.html',
      inject: 'body',
      favicon: 'Favicon.ico'
    })
  ],
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, 'Build'),
    compress: true,
    port: 9000,
    historyApiFallback: {
      rewrites: [
        { from: /^\/(?!api)/, to: '/index.html' },
      ],
    },
    devMiddleware: {
      index: true,
      writeToDisk: true,
    }
  }
});
