const path = require("path");
const webpack = require("webpack");
const glob = require("glob");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
let target = "web";
if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

module.exports = {
  mode: mode,
  target: target,
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
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({}),
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
