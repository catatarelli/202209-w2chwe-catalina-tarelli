module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: "true",
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "import/extensions": ["error", "always"],
    "no-plusplus": "off",
    "no-continue": "off",
    "import/no-mutable-exports": "off",
    "no-import-assign": "off",
  },
};
