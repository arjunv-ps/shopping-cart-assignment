const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",

  // tells Webpack how to write the compiled files to disk
  output: {
    // This will be the filename of the bundled application
    // [hash] portion of the filename will be replaced by a hash generated by Webpack every time your application changes and is recompiled (helps with caching)
    filename: "bundle.[fullhash].js",
    publicPath: "/",
  },
  // Helps with debugging
  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.sa?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
