module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: ['eslint:recommended', "plugin:jsdoc/recommended", 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ['prettier','jsdoc'],
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'no-undef': 'off',
  },
};
