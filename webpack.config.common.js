const path = require("path");
const webpack = require("webpack");
const glob = require("glob");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
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

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]", //圖片輸出路徑
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource", //asset/inline 不產生圖片檔 or //asset/resource 產生圖片檔
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024,
          },
        },
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              // 只在 production 環境啟用壓縮 (第二步)
              // disable: process.env.NODE_ENV === "production" ? false : true,
              disable: false,
            },
          },
        ],
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
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({}),
    new ImageminPlugin({
      externalImages: {
        context: ".",
        source: glob.sync("public/assets/images/**/*.{png,jpg,jpeg,gif,svg}"),
        destination: "public/assets/images",
        filename: "[name].[ext]",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
  },
};
