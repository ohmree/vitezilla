# Deep Mocking

## Problem

You have a deeply nested API, like the `browser` object in webextensions, which requires you to call it like this:

::: code-tabs

@tab my-webextension.ts

```typescript
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

:::

## Solution

By using `deepMock<T>(name, autoCleanup=true)` you can easily create mocks for the above scenario.

::: tabs

@tab browser.ts

@[code](@root/packages/core/example/browser.ts)

@tab web-extension.spec.ts

@[code](@root/packages/core/example/web-extension.test.ts)

:::

::: note
If you want to mock `webextension-polyfill`, please take a look at [`@vitezilla/webextension`](/webextension).
:::

## More Details

`deepMock<T>(...)` expects a type parameter specifying the interface to be mocked.

`deepMock<T>(...)` expects two parameters:

- A `name` used for error messages
- An optional `autoCleanup` boolean (defaults to true).

Use `autoCleanup=true` if you create the mock instance within your `test()`, `it()` or `beforeEach()` block to automatically verify the mocks and disable them after the test has finished. Since this is a very common use-case, it's the default is `true`.

- Verify means: If your mock expectation has not been fullfilled, the test will fail.
- Disabling means: An exception will be thrown if the mocked instance (proxy) has been used after disabling.

`deepMock<T>(...)` returns an array with 3 items in it:

1. The proxy instance (i.e. the object your logic will use).
2. A `VitezillaDeep<T>` mock builder. This is used to set up your mocks during tests.
3. A `VitezillaNode`, which is for some rare situations where you need more control. In most cases you can ignore this.

If you want to know more about what you can do with the expect calls, check out [Expectations](expectations.md).

## VitezillaDeep

The mock builder auto-completes the public properties of the interface you supplied via the type parameter of `deepMock<T>(...)`. This works deeply.

Additionally, each nested node has the following methods available:

```typescript
// With this, you can simple specify a value to use during the test.
mock: (value: T) => void;
// This allows using the property without actually specifying its value.
mockAllow: () => void;
// Same as above, but prepares a method call. I.e. use this on a method instead.
mockAllowMethod: () => void;
// Used internally. Shows the path of the builder.
mockPath: string;
```

There are additional methods available for methods. Check out [Expectations](expectations.md).
