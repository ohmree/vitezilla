import type { Browser } from 'webextension-polyfill';
import { deepMock } from 'vitezilla';

const [browser, mockBrowser, mockBrowserNode] = deepMock<Browser>('browser', false);

export { browser, mockBrowser, mockBrowserNode };
