# Vitezilla

[![Minified + gzipped size](https://badgen.net/bundlephobia/minzip/vitezilla)](https://www.npmjs.com/package/vitezilla)
[![NPM version](https://badgen.net/npm/v/vitezilla)](https://www.npmjs.com/package/vitezilla)

### Introduction

The `vitezilla` package contains the core logic of Vitezilla - a mocking toolkit leveraging the power of TypeScript to enhance your Vitest experience.

> **Warning**\
> This is a **Work In Progress**! The API might change before version 1.0 is released.

#### Features

- [Deep Mocking](https://ohmree.github.io/vitezilla/core/deep-mock.html)
- [Mock Assimilation](https://ohmree.github.io/vitezilla/core/mock-assimilate.html) (replace methods of an existing object with mocks)
- [Time Manipulation](https://ohmree.github.io/vitezilla/core/mock-time.html)
- [Property protection & whitelisting](https://ohmree.github.io/vitezilla/core/utils.html)

#### Why use Vitezilla

- Integrates with Vitest
- Type-safety and code-completion out of the box.
- Dead simple to use
- Liberal license: [zlib/libpng](/LICENSE.md)

### Getting Started

Check out the [documentation page](https://ohmree.github.io/vitezilla/core) for examples.

### Example

<!-- #region example-text -->

This is an example of how a deep mock with Vitezilla looks like:

<!-- #endregion example-text -->

> **Note:**
> If you want to mock `webextension-polyfill`, please take a look at [`@vitezilla/webextension`](https://ohmree.github.io/vitezilla/webextension/).

`browser.ts`

<!--- @@inject: example/browser.ts --->

```ts
import type { Browser } from 'webextension-polyfill';
import { deepMock } from 'vitezilla';

const [browser, mockBrowser, mockBrowserNode] = deepMock<Browser>('browser', false);

export { browser, mockBrowser, mockBrowserNode };
```

<!--- @@inject-end: example/browser.ts --->

`web-extension.ts`

<!--- @@inject: example/web-extension.ts --->

```ts
import browser from 'webextension-polyfill';

export async function getActiveTabs() {
  return await browser.tabs.query({ active: true });
}

export function onBeforeRedirect(callback: () => void) {
  browser.webRequest.onBeforeRedirect.addListener(callback, {
    urls: [
      // ...
    ],
  });
  return () => browser.webRequest.onBeforeRedirect.removeListener(callback);
}
```

<!--- @@inject-end: example/web-extension.ts --->

`web-extension.test.ts`

<!--- @@inject: example/web-extension.test.ts --->

```ts
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
```

<!--- @@inject-end: example/web-extension.test.ts --->
