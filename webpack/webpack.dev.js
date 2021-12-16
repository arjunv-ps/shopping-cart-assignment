const webpack = require("webpack");
const commonPaths = require("./common-paths");

const port = process.env.PORT || 3000;

module.exports = {
  mode: "development",
  entry: {
    app: `${commonPaths.appEntry}/index.js`,
  },
  // tells Webpack how to write the compiled files to disk
  output: {
    // This will be the filename of the bundled application
    // [hash] portion of the filename will be replaced by a hash generated by Webpack every time your application changes and is recompiled (helps with caching)
    filename: "bundle.[hash].js",
  },
  // Helps with debugging
  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true,
  },
};