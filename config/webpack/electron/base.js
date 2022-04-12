const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const renderer = {
  mode: "development",
  entry: {
    renderer: path.resolve("./app/javascript/packs/application.ts"), //エントリーポイント
  },
  output: {
    filename: "[name].js", //自動出力するファイル
    path: path.resolve("./dist"), //自動出力先
  },
  resolve: {
    extensions: [".vue", ".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$|\.ts$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new VueLoaderPlugin(), new HtmlWebpackPlugin()],
  devtool: "inline-source-map",
  devServer: {
    compress: true,
    port: 9000,
    static: {
      directory: path.resolve("./dist"),
      watch: { ignored: "**/node_modules/**" },
    },
  },
};

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

module.exports = [renderer, main];
