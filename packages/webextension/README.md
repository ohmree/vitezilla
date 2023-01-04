# `@vitezilla/webextension`

[![Minified + gzipped size](https://badgen.net/bundlephobia/minzip/@vitezilla/webextension)](https://www.npmjs.com/package/@vitezilla/webextension)
[![NPM version](https://badgen.net/npm/v/@vitezilla/webextension)](https://www.npmjs.com/package/@vitezilla/webextension)

### Introduction

`@vitezilla/webextension` is a mocking toolkit for webextensions leveraging the power of TypeScript to enhance your Vitest experience.

> **Warning**  
> This is a **Work In Progress**! The API might change before version 1.0 is released.

#### Features

- Combines [`@types/webextension-polyfill`](https://github.com/lusito/webextension-polyfill-ts) with [`vitezilla`](/packages/core) to create a [deep mock of the browser object](https://ohmree.github.io/vitezilla/webextension/browser.html).
- Adds an additional function [`mockEvent`](https://ohmree.github.io/vitezilla/webextension/mock-event.html) to enable special support for webextension events.

#### Why use `@vitezilla/webextension`

- Integrates with Vitest
- Type-safety and code-completion out of the box.
- Dead simple to use
- Liberal license: [zlib/libpng](/LICENSE.md)

### Installation via NPM

```shellsession
$ npm i -D @vitezilla/webextension # or yarn, or pnpm
```

### Getting Started

Check out the [documentation page](https://ohmree.github.io/vitezilla/webextension/) for examples

### Example

<!-- #region example-text -->

This is an example of how a deep mock with `@vitezilla/webextension` looks like:

<!-- #endregion example-text -->

<!-- #region example -->

```typescript
import { describe, expect, it, vi } from 'vitest';
import { mockBrowser } from '@vitezilla/webextension';

describe('WebExtension Helpers', () => {
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

<!-- #endregion example -->
