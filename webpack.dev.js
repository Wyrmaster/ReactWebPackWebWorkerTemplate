const path = require('path');
const config = require('./webpack.config');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = merge(config, {
  mode: 'development',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'Build')
  },
  plugins: [
    new MiniCssExtractPlugin(
      {
        filename: '[name].[contenthash].css'
      }
    ),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'Source', 'Index.html'),
      filename: 'Index.html',
      inject: 'body',
      favicon: 'Favicon.ico'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, 'Build'),
    compress: true,
    port: 9000,

  }
});
