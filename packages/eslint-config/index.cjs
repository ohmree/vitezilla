// @ts-check

const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: ['turbo', '@antfu', 'prettier'],
  rules: {
    'antfu/if-newline': 'off',
  },
  overrides: [
    {
      files: '*.cjs',
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  ignorePatterns: ['*.json', '*.json5', '*.yaml', '*.yml'],
});
