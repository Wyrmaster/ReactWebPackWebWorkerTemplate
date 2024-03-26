// noinspection WebpackConfigHighlighting

const path = require('path');
require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: path.join(__dirname, 'Source', 'Vendor.ts'),
    main: path.join(__dirname, 'Source', 'Index.tsx')
  },
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
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
};
