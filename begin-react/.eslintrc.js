module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'react-app',
    'plugin:@typescript-eslint/recommended',
    // typescript 표준 규칙 모음
    'plugin:import/errors',
    'plugin:import/warnings',
    // "plugin:import/typescript",
    // import 관련 규칙 모음
    'plugin:prettier/recommended',
    // "prettier/@typescript-eslint",
    // "prettier/react",
    // prettier 관련 규칙 모음
  ],

  rules: {
    'no-console': 'off',
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
