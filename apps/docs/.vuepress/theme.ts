import { hopeTheme } from 'vuepress-theme-hope';
import { enNavbar } from './navbar';
import { enSidebar } from './sidebar';
import { handleRootAlias } from './utils';

export default hopeTheme({
  hostname: 'https://vuepress-theme-hope-docs-demo.netlify.app',
  author: [
    { name: 'Santo Pfingsten', url: 'https://github.com/Lusito' },
    {
      name: 'ohmree',
      url: 'https://github.com/ohmree',
    },
  ],
  iconAssets: 'fontawesome',
  // iconPrefix: '',
  navbarLayout: { left: ['Brand'], center: [], right: ['Links', 'Language', 'Repo', 'Outlook', 'Search'] },
  repo: 'ohmree/vitezilla',
  docsDir: 'apps/docs',
  pageInfo: false,
  pure: true,
  locales: {
    '/': {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      copyright: 'Copyright © 2020 Santo Pfingsten, 2022 ohmree',
      displayFooter: true,

      metaLocales: {
        editLink: 'Edit this page on GitHub',
      },
    },
  },
  plugins: {
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      container: true,
      demo: true,
      gfm: true,
      // imgLazyload: true,
      // imgSize: true,
      include: { deep: true, getPath: handleRootAlias },
      // vPre: true,
      tabs: true,
    },
  },
});
