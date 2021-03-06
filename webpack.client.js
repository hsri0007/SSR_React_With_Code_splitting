const path = require("path");
const commonConfig = require("./webpack.common");
const merge = require("webpack-merge");

const mainConfig = {
  mode: "production",
  entry: "./src/client/client.js",
  output: {
    publicPath: "/",
    filename: "[name].js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};

module.exports = merge(commonConfig, mainConfig);
