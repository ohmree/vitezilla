import { afterEach, beforeEach, vi } from 'vitest';
import { mockBrowserRootNode } from './mockBrowser';

vi.mock('webextension-polyfill', async () => {
  const { mockBrowserRootNode } = await import('./mockBrowser');

  const proxy = new Proxy(
    {},
    {
      get: (...args): any => {
        if (args[1] === '__esModule') return false;
        // @ts-expect-error: NOTE: the original code seems to have not been very well-typed, maybe out of necessity.
        return mockBrowserRootNode.traps.get(...args);
      },
      // forward the rest to mockBrowserRootNode traps
      // @ts-expect-error: the same as above.
      ownKeys: (...args) => mockBrowserRootNode.traps.ownKeys(...args),
      // @ts-expect-error: the same as above.
      has: (...args) => mockBrowserRootNode.traps.has(...args),
      // @ts-expect-error: the same as above.
      apply: (...args): any => mockBrowserRootNode.traps.apply(...args),
      // @ts-expect-error: the same as above.
      getPrototypeOf: (...args) => mockBrowserRootNode.traps.getPrototypeOf(...args),
      // @ts-expect-error: the same as above.
      setPrototypeOf: (...args) => mockBrowserRootNode.traps.setPrototypeOf(...args),
      // @ts-expect-error: the same as above.
      isExtensible: (...args) => mockBrowserRootNode.traps.isExtensible(...args),
      // @ts-expect-error: the same as above.
      preventExtensions: (...args) => mockBrowserRootNode.traps.preventExtensions(...args),
      // @ts-expect-error: the same as above.
      set: (...args) => mockBrowserRootNode.traps.set(...args),
      // @ts-expect-error: the same as above.
      deleteProperty: (...args) => mockBrowserRootNode.traps.deleteProperty(...args),
      // @ts-expect-error: the same as above.
      construct: (...args) => mockBrowserRootNode.traps.construct(...args),
      // @ts-expect-error: the same as above.
      getOwnPropertyDescriptor: (...args) => mockBrowserRootNode.traps.getOwnPropertyDescriptor(...args),
      // @ts-expect-error: the same as above.
      defineProperty: (...args) => mockBrowserRootNode.traps.defineProperty(...args),
    },
  );
  return { default: proxy };
});

beforeEach(() => mockBrowserRootNode.enable());

afterEach(() => mockBrowserRootNode.verifyAndDisable());
