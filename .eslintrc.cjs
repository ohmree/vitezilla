require('@rushstack/eslint-patch/lib/modern-module-resolution');
const path = require('path');
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  overrides: [
    {
      files: ['.eslintrc.cjs', 'volar.config.js'],
      extends: ['@vitezilla'],
    },
  ],
});
