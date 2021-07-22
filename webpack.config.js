// noinspection WebpackConfigHighlighting

const path = require('path');
require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, 'Source', 'Index.tsx')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
        include: [
          path.resolve(__dirname, 'Source')
        ],
      },
      {
        test: /\.worker\.ts$/,
        loader: 'worker-loader',
        options: {
          esModule: false,
        }
      },
      {
        enforce: "pre",
        test: "/\.js$/",
        loader: "source-map-loader"
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
            name: '[name].[hash].[ext]',
            outputPath: 'Image'
          }
        }
      }
    ]
  }
};
