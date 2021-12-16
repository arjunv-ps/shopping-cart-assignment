const { merge } = require("webpack-merge");

const commonConfig = require("./webpack/webpack.common");
const productionConfig = require("./webpack/webpack.prod");
const developmentConfig = require("./webpack/webpack.dev");

module.exports = (env, args) => {
  return merge(
    commonConfig,
    env.development ? developmentConfig : productionConfig
  );
};
