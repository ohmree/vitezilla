# Setup

## Requirements

You need to be using [`webextension-polyfill`](https://github.com/mozilla/webextension-polyfill) and [`@types/webextension-polyfill`](https://github.com/lusito/webextension-polyfill-ts) in your webextension for this project to work.

If you don't want to use the above in your webextension, you might want to take a look at [`vitezilla`](/core) instead and find a custom solution. Take a look at the [`deep-mock`](/core/deep-mock.md) documentation to get an idea.

::: code-tabs#shell

@tab pnpm

```shellsession:no-line-numbers
$ pnpm i -D @vitezilla/webextension
```

@tab yarn

```shellsession:no-line-numbers
$ yarn add -D @vitezilla/webextension
```

@tab npm

```shellsession:no-line-numbers
$ npm i -D @vitezilla/webextension
```

:::

## Vitest

Aside from `vitezilla` and `@vitezilla/webextension` themselves, you'll only need [Vitest](https://vitest.dev/).

Here's a quick setup guide for Vitest with TypeScript and `@vitezilla/webextension`:

::: code-tabs#shell

@tab pnpm

```shellsession:no-line-numbers
$ pnpm i -D vitest
```

@tab yarn

```shellsession:no-line-numbers
$ yarn add -D vitest
```

@tab npm

```shellsession:no-line-numbers
$ npm i -D vitest
```

:::

Create a file `vitest.config.ts` or append to your existing `vite.config.ts` file:

```typescript
/// <reference types="vitest" />

import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    setupFiles: 'vitest.setup.ts',
  },
});
```

::: tip

You might need to use Vite's [`mergeConfig`](https://vitejs.dev/guide/api-javascript.html#mergeconfig) helper if you create a separate config for Vitest and would like to share some of the options between the two.

:::

Add test scripts to your `package.json`:

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest watch"
  }
}
```

In order to setup `afterEach` callbacks and mock `webextension-polyfill` you'll need to create a setup file (e.g. `vitest.setup.ts`):

```typescript:no-line-numbers
import '@vitezilla/webextension/setup';
```

Now all you need to do is write test files and run the tests:

::: code-tabs#shell

@tab pnpm

```shellsession:no-line-numbers
$ pnpm test
```

@tab yarn

```shellsession:no-line-numbers
$ yarn test
```

@tab npm

```shellsession:no-line-numbers
$ npm test
```

:::
