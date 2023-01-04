require('@rushstack/eslint-patch/lib/modern-module-resolution');
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  extends: ['@vitezilla'],
});
