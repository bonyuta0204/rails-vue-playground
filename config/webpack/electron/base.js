const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const main = {
  mode: "development",
  target: "electron-main",

  entry: {
    main: path.resolve("./src/main.js"), //エントリーポイント
  },
  output: {
    filename: "[name].js", //自動出力するファイル
    path: path.resolve("./dist"), //自動出力先
  },
};

module.exports = [main];
