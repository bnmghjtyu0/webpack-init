const { merge } = require("webpack-merge");
const common = require("./webpack.config.common");

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = merge(common, {
  mode: mode,
  // devtool: "source-map",
  devServer: {
    contentBase: "./dist",
  },
});
