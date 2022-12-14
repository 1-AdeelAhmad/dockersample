// const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "google"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-trailing-spaces": ERROR,
    "no-multiple-empty-lines": ERROR,
    semi: [ERROR, "always"],
    'require-jsdoc': [
      WARN,
      {
          require: {
              FunctionDeclaration: true,
              MethodDefinition: false,
              ClassDeclaration: false,
              ArrowFunctionExpression: false,
              FunctionExpression: false,
          },
      },
  ],
  },
  settings: {
    react: {
      version: "latest",
    },
  },
  extends: ["plugin:@next/next/recommended", "google", "prettier"],
};
