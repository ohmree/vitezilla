# Vitezilla

[![Minified + gzipped size](https://badgen.net/bundlephobia/minzip/vitezilla)](https://www.npmjs.com/package/vitezilla)
[![NPM version](https://badgen.net/npm/v/vitezilla)](https://www.npmjs.com/package/vitezilla)

### Introduction

`vitezilla` contains the core logic of Vitezilla - a mocking toolkit leveraging the power of TypeScript to enhance your Vitest experience.

> **Warning**  
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

<!-- embed-examples: example/browser.ts -->
