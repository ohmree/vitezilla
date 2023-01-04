# Utilities

## Problem

You want to ensure your code has no side-effects.

## Solution 1: Deny Property Access

`denyPropertyAccess<T>(instance: T, property: string)`

Use this if you want to verify, that a specified property will not get accessed during the test:

::: code-tabs

@tab some.spec.ts

```typescript
import { denyPropertyAccess } from 'vitezilla';
import { test } from 'vitest';

test('modifiedDate will not be touched', () => {
  const myInstance = new MyClass();
  denyPropertyAccess(myInstance, 'modifiedDate');
  myInstance.run();
  // If we got here, it means modifiedDate was not touched!
});
```

:::

## Solution 2: Whitelist Property Access

`whitelistPropertyAccess(instance: any, ...whitelist: string[])`

This can be used to call `denyPropertyAccess` on all properties except the ones in the whitelist:

::: code-tabs

@tab some.spec.ts

```typescript
import { whitelistPropertyAccess } from 'vitezilla';
import { test } from 'vitest';

test('only tasks and showNotifiations may be touched', () => {
  const myInstance = new MyClass();
  whitelistPropertyAccess(myInstance, 'run', 'tasks', 'showNotification');
  myInstance.run();
  // If we got here, it means no other properties than the ones specified above have been touched!
});
```

:::
