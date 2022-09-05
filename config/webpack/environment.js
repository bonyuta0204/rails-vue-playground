const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

const { environment } = require("@rails/webpacker");
const { VueLoaderPlugin } = require("vue-loader");
const { resolve } = require("path");
const vue = require("./loaders/vue");

environment.plugins.prepend("VueLoaderPlugin", new VueLoaderPlugin());
environment.plugins.prepend("MonacoWebpackPlugin", new MonacoWebpackPlugin());
environment.loaders.prepend("vue", vue);
environment.config.merge({
  resolve: {
    alias: {
      vue$: resolve(__dirname, "../../node_modules/vue/dist/vue.esm.js"),
    },
  },
});

module.exports = environment;
