const path = require("path");

const main = {
  mode: "development",
  target: "electron-main",

  resolve: {
    extensions: [".js", ".ts"],
  },

  entry: {
    main: path.resolve("./src/main.ts"), //エントリーポイント
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
  output: {
    filename: "[name].js", //自動出力するファイル
    path: path.resolve("./dist"), //自動出力先
  },
};

const preload = {
  mode: "development",
  target: "electron-preload",

  resolve: {
    extensions: [".js", ".ts"],
  },

  entry: {
    preload: path.resolve("./src/preload.ts"), //エントリーポイント
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
  output: {
    filename: "[name].js", //自動出力するファイル
    path: path.resolve("./dist"), //自動出力先
  },
};

module.exports = [main, preload];
