const commonPaths = require('./common-paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
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
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${commonPaths.projectRoot}/public/index.html`
    })
  ]
};
module.exports = config;
