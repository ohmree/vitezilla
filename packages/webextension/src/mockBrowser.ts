import type { Browser } from 'webextension-polyfill';
import { deepMock } from 'vitezilla';

const [, mockBrowser, mockBrowserRootNode] = deepMock<Browser>('browser', false);
export { mockBrowser, mockBrowserRootNode };
