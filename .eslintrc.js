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
    //"plugin:@typescript-eslint/recommended-requiring-type-checking",
    //"plugin:@typescript-eslint/strict"
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    project: ["./tsconfig.json", "./cypress/tsconfig.json"],
    extraFileExtensions: [".vue"],
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    // typescriptのプラグイン側でno-unused-varsのチェックを行う
    "no-unused-vars": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
