# Deep Mock of Browser

## Problem

The `browser` object in webextensions is a deeply nested API, which requires you to call it like this:

::: tabs

@tab my-webextension.ts

@[code](@root/packages/core/example/web-extension.ts)

:::

## Solution

By using the power of [Vitezilla](/core), this project provides a `mockBrowser` object you can import in your tests:

::: tabs

@tab my-webextension.spec.ts

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

:::

## More Details

See the documentation of [vitezilla](https://lusito.github.io/vitezilla/) to find out more about how you can use this API.
