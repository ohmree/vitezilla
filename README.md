# Vitezilla

[![License](https://badgen.net/github/license/ohmree/vitezilla)](LICENSE.md)
[![Stars](https://badgen.net/github/stars/ohmree/vitezilla)](https://github.com/ohmree/vitezilla/stargazers)
[![Watchers](https://badgen.net/github/watchers/ohmree/vitezilla)](https://github.com/ohmree/vitezilla)

## Introduction

Vitezilla is a mocking toolkit leveraging the power of TypeScript to enhance your Vitest experience.  
Read more on the [main package's `README`](packages/core/README.md).

### Attribution

Vitezilla is first and foremost Lusito's [Mockzilla](https://github.com/Lusito/mockzilla), made to work with Vitest instead of Jest.  
This project would not have been possible without Mockzilla and the vast majority of the actual code and documentation _is_ very slightly modified from Mockzilla so huge thanks to Lusito for making the best webextension testing library I know of.  
Generally if something works in Mockzilla it _should_ work in Vitezilla too, except for Jest-style global objects in Mockzilla (e.g. `deepMock`, `mockBrowser`) that should instead be imported from the relevant package (e.g. `vitezilla`, `@vitezilla/webextension`) as is idiomatic in Vitest.

## Repo layout

This is a monorepo managed using [Turborepo](https://turbo.build/repo), containing the following packages/apps:

### Apps and Packages

- [`docs`](/apps/docs): a [VuePress](https://v2.vuepress.vuejs.org/) app
- [`core`](/packages/core): the core `vitezilla` package
- [`webextension`](/packages/webextension): the `@vitezilla/webextension` package that enhances the Vitezilla core experience with webextension-specific utilities
- [`eslint-config`](/packages/eslint-config): `eslint` configurations (includes `eslint-config-turbo`, `@antfu/eslint-config` and `eslint-config-prettier`)
- [`tsconfig`](/packages/tsconfig): `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Report issues

Something not working quite as expected? Do you need a feature that has not been implemented yet? Check the [issue tracker](https://github.com/ohmree/vitezilla/issues) and add a new one if your problem is not already listed. Please try to provide a detailed description of your problem, including the steps to reproduce it.

### Contribute

Awesome! If you would like to contribute with a new feature or submit a bugfix, fork this repo and send a pull request. Please, make sure all the unit tests are passing before submitting and add new ones in case you introduced new features.

### License

Like Mockzilla, Vitezilla is released under the [zlib/libpng license](LICENSE.md), meaning you
can use it free of charge, without strings attached in commercial and non-commercial projects. Credits are appreciated but not mandatory.
