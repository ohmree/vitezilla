import { defineUserConfig } from 'vuepress';
import theme from './theme';
import { handleRootAlias } from './utils';

export default defineUserConfig({
  base: '/vitezilla/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vitezilla',
      description: 'The documentation site for Vitezilla',
    },
  },
  markdown: {
    importCode: {
      handleImportPath: handleRootAlias,
    },
  },
  theme,
});
