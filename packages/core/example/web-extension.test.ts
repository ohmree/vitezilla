import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mockBrowser, mockBrowserNode } from './browser';
import { getActiveTabs, onBeforeRedirect } from './web-extension';

vi.mock('webextension-polyfill', async () => {
  const { browser } = await import('./browser');
  return browser;
});

describe('WebExtension Helpers', () => {
  beforeEach(() => mockBrowserNode.enable());

  afterEach(() => mockBrowserNode.verifyAndDisable());

  describe('getActiveTabs()', () => {
    it('should return active tabs', async () => {
      const tabs = [{ id: 1 }, { id: 2 }];
      mockBrowser.tabs.query.expect({ active: true }).andResolve(tabs);

      expect(await getActiveTabs()).toEqual(tabs);
    });
  });

  describe('onBeforeRedirect()', () => {
    it('should register a listener and return a handle to remove the listener again', () => {
      const listener = vi.fn();
      mockBrowser.webRequest.onBeforeRedirect.addListener.expect(listener, expect.anything());

      const removeListener = onBeforeRedirect(listener);

      mockBrowser.webRequest.onBeforeRedirect.removeListener.expect(listener);
      removeListener();
    });
  });
});
