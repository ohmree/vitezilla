---
home: true
heroText: Vitezilla
tagline: A mocking toolkit leveraging the power of TypeScript to enhance your Vitest experience.
actions:
  - text: Get Started →
    link: /core/setup
    type: primary
  - text: Use in WebExtensions →
    link: /webextension/setup
features:
  - title: Painless
    details: Writing mocks should be simple and fun. With Vitezilla you can skip writing manual mocks of deeply nested APIs and focus on writing tests.
  - title: Type-safe
    details: You use TypeScript to have code-completion and type-safety? Great! Vitezilla uses the types you have to ensure a pleasant experience!
  - title: Good Errors
    details: Errors should point to where the errors come from. Vitezilla will give you hints on where you expected calls and where they actually happened.
---

<!-- #region contents -->

::: warning
This is a **Work In Progress**! The API might change before version 1.0 is released.
:::

### Features

- [Deep Mocking](/core/deep-mock.md)
- [Mock Assimilation](/core/mock-assimilate.md) (replace methods of an existing object with mocks)
- [Time Manipulation](/core/mock-time.md)
- [Property protection & whitelisting](/core/utils.md)

### Example: WebExtensions

@include(@root/packages/core/README.md#example-text)

::: tabs

@tab browser.ts

@[code](@root/packages/core/example/browser.ts)

@tab web-extension.ts

@[code](@root/packages/core/example/web-extension.ts)

@tab web-extension.test.ts

@[code](@root/packages/core/example/web-extension.test.ts)

:::

<!-- #endregion contents -->
