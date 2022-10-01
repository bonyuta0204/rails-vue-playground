const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

const { environment } = require("@rails/webpacker");
const { VueLoaderPlugin } = require("vue-loader");
const { resolve } = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const vue = require("./loaders/vue");

environment.plugins.prepend("VueLoaderPlugin", new VueLoaderPlugin());
environment.plugins.prepend("MonacoWebpackPlugin", new MonacoWebpackPlugin());
environment.plugins.append(
  "ForkTsCheckerWebpackPlugin",
  new ForkTsCheckerWebpackPlugin({
    typescript: {
      configFile: resolve(__dirname, "../../tsconfig.json"),
    },
    async: false,
  })
);
environment.loaders.prepend("vue", vue);

environment.config.merge({
  resolve: {
    alias: {
      vue$: resolve(__dirname, "../../node_modules/vue/dist/vue.esm.js"),
      "@/lib": resolve(__dirname, "../../app/javascript/src/lib"),
      "@/composables": resolve(
        __dirname,
        "../../app/javascript/src/composables"
      ),
      "@/components": resolve(__dirname, "../../app/javascript/src/components"),
      "@/types": resolve(__dirname, "../../app/javascript/src/types"),
      "@/assets": resolve(__dirname, "../../app/javascript/src/assets"),
    },
  },
});

module.exports = environment;
