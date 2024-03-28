const path = require('path');
const config = require('./webpack.config');
const merge = require('webpack-merge');
const CssMinimizerAssetsPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'Build')
  },
  optimization: {
    minimizer: [
      new CssMinimizerAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'Source', 'Index.html'),
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        },
        inject: 'body',
        filename: 'Index.html',
        favicon: 'Favicon.ico'
      })
    ]
  },
});
