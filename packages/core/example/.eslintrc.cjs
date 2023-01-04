const path = require('path');
const { defineConfig } = require('eslint-define-config');

// eslint-disable-next-line turbo/no-undeclared-env-vars
process.env.ESLINT_TSCONFIG = path.resolve(__dirname, './tsconfig.json');

module.exports = defineConfig({
  root: true,
  extends: ['@vitezilla'],
});
