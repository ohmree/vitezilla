# Expectations

When you are mocking a method, you have two ways to add expectations:

- `expect()` allows you to be specific about an expected call
- `spy()` allows you to handle the call yourself.

- Each of these calls is only good for one call.
  - If you call the original method multiple times, you will get an error unless you add more expectations.
- Expectations must be added before calling the original methods.

## Expect

Expect has the following signature:

```typescript
expect: ((...args: Parameters<T>) => VitezillaFunction<T>) & VitezillaFunction<T>;
```

Let's see a few example uses:

```typescript
import { test, expect } from 'vitest';
import { deepMock } from 'vitezilla';

test('', () => {
  const [worker, mockWorker] = deepMock<MyWorker>('myWorker');

  // parameters will be ignored
  mockWorker.myFunction.expect;
  // The call must be made with these 2 parameters.
  mockWorker.myFunction.expect('foo', 'bar');
  // The call must be made with "foo" as first parameter any anything as second parameter.
  // I.e. this is the equivalent of expect(x).toHaveBeenCalledWith(...)
  mockWorker.myFunction.expect('foo', expect.anything());
  // ...
});
```

You can further specify details of the call by adding a dot after any of the above and using these available options:

For synchronous functions:

```typescript
// Always available:
times: (count: number) => void;

// Available on synchronous methods:
andReturn: (result: ReturnType<T>) => VitezillaTimes;
andThrow: (error: Error) => VitezillaTimes;

// Available on asynchronous methods:
andResolve: (result: Promise<ReturnType<T>>) => VitezillaTimes;
andReject: (error: Error) => VitezillaTimes;
```

- As you can see, all of these (except `times`) return `VitezillaTimes`, which allows you to call `.times()` on them.
- Times can be used to repeat the statement you just made `count` times.

Let's see a few example uses:

```typescript
import { test, expect } from 'vitest';
import { deepMock } from 'vitezilla';

test('', () => {
  const [worker, mockWorker] = deepMock<MyWorker>('myWorker');

  mockWorker.myFunction.expect.andReturn('foo');
  mockWorker.myAsyncFunction.expect.andThrow(new Error('No way'));
  mockWorker.myAsyncFunction.expect('foo', expect.anything()).andResolve({ foo: 'bar' }).times(5);
  // ...
});
```

## Spy

Spy is comparatively simple. It only expects the call and then delegates it to the function you specified.

```typescript
spy: (fn: T) => VitezillaTimes;
```

Let's see a few example uses:

```typescript
import { test, vi } from 'vitest';
import { deepMock } from 'vitezilla';

test('', () => {
  const [worker, mockWorker] = deepMock<MyWorker>('myWorker');

  let storedParam = null;
  mockWorker.myFunction.spy(param => {
    storedParam = param;
    return true;
  });

  const spy = vi.fn();
  mockWorker.myFunction.spy(spy).times(2);
  // ...
});
```

## Getting mocked calls

Sometimes you want to access the parameters of calls that have been made.

```typescript
getMockCalls: () => Array<Parameters<T>>;
```

Let's see an example use:

```typescript
import { test, expect } from 'vitest';
import { deepMock } from 'vitezilla';

test('', () => {
  const [worker, mockWorker] = deepMock<MyWorker>('myWorker');

  mockWorker.myFunction.expect.times(2);

  worker.myFunction('foo', 'bar');
  worker.myFunction('hello', 'world');

  expect(mockWorker.myFunction.getMockCalls()).toEqual([
    ['foo', 'bar'],
    ['hello', 'world'],
  ]);
});
```
