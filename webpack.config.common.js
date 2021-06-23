const path = require("path");
const webpack = require("webpack");
const glob = require("glob");
const ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = {
  mode: "development",
  entry: ["./src/index.js"],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new ImageminPlugin({
      externalImages: {
        context: ".",
        source: glob.sync("src/assets/images/**/*.{png,jpg,jpeg,gif,svg}"),
        destination: "assests/dist/images",
        filename: "[name].[ext]",
      },
    }),
  ],
};
