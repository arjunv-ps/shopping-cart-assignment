const webpack = require('webpack'); // only add this if you don't have yet
const path = require('path');

const commonPaths = require('./common-paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const Dotenv = require('dotenv-webpack');
// const path = require('path');
require('dotenv').config({ path: './.env' });

const config = {
  resolve: {
    // alias: {
    //   Rootdir: path.join(__dirname, '../')
    // }
  },
  output: {
    path: commonPaths.outputPath,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         publicPath: 'static/images/'
      //       }
      //     }
      //   ]
      // }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${commonPaths.projectRoot}/public/index.html`
    }),
    // new Dotenv({
    //   path: path.join(`${commonPaths.projectRoot}`, '.env.development')
    // }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
  ]
};
module.exports = config;
