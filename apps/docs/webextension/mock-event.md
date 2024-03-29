# Event Mocking

## Problem

You want to work with webextension events, but you don't want to expect calls to `addListener` and `removeListener` all the time.

## Solution

::: code-tabs

@tab my-events.spec.ts

```typescript
import { beforeEach, describe, expect, it } from 'vitest';
import { type VitezillaEventOf, mockEvent } from '@vitezilla/webextension';

describe('MyEventHandler', () => {
  let myEventHandler: MyEventHandler;
  let onRemoved: VitezillaEventOf<typeof mockBrowser.tabs.onRemoved>;
  let onCreated: VitezillaEventOf<typeof mockBrowser.tabs.onCreated>;

  beforeEach(() => {
    onRemoved = mockEvent(mockBrowser.tabs.onRemoved);
    onCreated = mockEvent(mockBrowser.tabs.onCreated);
    myEventHandler = new MyEventHandler();
  });

  describe('listeners', () => {
    it('should add listeners after init', () => {
      myEventHandler.init();
      expect(onRemoved.hasListener(myEventHandler!.onTabRemoved)).toBe(true);
      expect(onCreated.hasListener(myEventHandler!.onTabCreated)).toBe(true);
    });
  });
  describe('onTabCreated', () => {
    it('do stuff with new tab', () => {
      myEventHandler.init();

      // ...

      onTabCreated.emit({
        active: true,
        cookieStoreId: 'default',
        highlighted: false,
        id: 12,
        incognito: true,
        index: 1,
        isArticle: false,
        isInReaderMode: false,
        lastAccessed: Date.now(),
        pinned: false,
        url: 'http://some-domain.com',
        windowId: 1,
      });
      // ...
    });
  });
});
```

:::

The implementations of `addListener`, `removeListener`, `hasListener` and `hasListeners` are instances of `vi.fn()`, so you can use them to verify calls.
