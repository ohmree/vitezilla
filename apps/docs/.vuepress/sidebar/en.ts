import { sidebar } from 'vuepress-theme-hope';

export const enSidebar = sidebar({
  '/': [],
  '/core': ['', 'setup', 'deep-mock', 'mock-assimilate', 'expectations', 'utils', 'mock-time'],
  '/webextension': ['', 'setup', 'browser', 'mock-event'],
});
