// noinspection WebpackConfigHighlighting
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    vendor: path.join(__dirname, 'Source', 'Vendor.ts'),
    main: path.join(__dirname, 'Source', 'Index.tsx')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(
      {
        filename: '[name].[contenthash].css'
      }
    ),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader'
        },
        exclude: '/node_modules/'
      },
      {
        enforce: "pre",
        test: "/\.js$/",
        loader: "source-map-loader"
      },
      {
        test: /\.worker\.ts$/,
        loader: 'worker-loader',
        options: {
          esModule: false,
        }
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            name: '[name].[hash].[ext]',
            outputPath: 'images'
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader},
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                mode: 'local',
                localIdentName: "__[local]--[hash:base64:8]",
              }
            }
          },
          { loader: 'sass-loader'}
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
};
