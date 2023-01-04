# Setup

## Installing

::: code-tabs#shell

@tab pnpm

```shellsession:no-line-numbers
$ pnpm i -D vitezilla
```

@tab yarn

```shellsession:no-line-numbers
$ yarn add -D vitezilla
```

@tab npm

```shellsession:no-line-numbers
$ npm i -D vitezilla
```

:::

## Vitest

Aside from Vitezilla itself, you'll only need [Vitest](https://vitest.dev/).

Here's a quick setup guide for Vitest: (you can skip this if you are already using Vitest)

Install Vitest:

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

Add test scripts to your `package.json`:

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest watch"
  }
}
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
