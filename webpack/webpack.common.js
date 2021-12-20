const commonPaths = require("./common-paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const config = {
  entry: {
    index: path.resolve(commonPaths.appEntry, "index.tsx"),
    // `${}/index.tsx `
  },
  output: {
    path: commonPaths.outputPath,
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${commonPaths.projectRoot}/public/index.html`,
    }),
  ],
};
module.exports = config;
