module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/essential",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    // typescriptのプラグイン側でno-unused-varsのチェックを行う
    "no-unused-vars": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "import/prefer-default-export": "off",
  },
};
