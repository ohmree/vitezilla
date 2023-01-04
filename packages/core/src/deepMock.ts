import { afterEach } from 'vitest';
import { VitezillaNode } from './node';
import { VitezillaError, getCleanStack } from './error';
import type { VitezillaDeep, VitezillaExpectation } from './types';

interface Target {
  path: string;
  children: Record<string, any>;
  rootNode: VitezillaNode;
}

const createTimes = (target: Target, expectation: VitezillaExpectation) => (callCount: number) => {
  while (--callCount > 0) target.rootNode.addExpectation(target.path, expectation);
};

const notAllowed = (name: string) => () => {
  throw new VitezillaError(`Error: It's not allowed to use ${name} on a mock builder.`);
};

const deepMockHandler: ProxyHandler<Target> = {
  get(target, prop) {
    if (prop === 'expect') {
      const expectation: VitezillaExpectation = {
        stack: getCleanStack(),
      };
      target.rootNode.addExpectation(target.path, expectation);
      const expect = Object.assign(
        (...args: any[]) => {
          expectation.args = args;
          return expect;
        },
        {
          andResolve: (result: any) => {
            expectation.returns = Promise.resolve(result);
            return expect;
          },
          andReject: (error: Error) => {
            expectation.returns = Promise.reject(error);
            return expect;
          },
          andReturn: (result: any) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            expectation.returns = result;
            return expect;
          },
          andThrow: (error: Error) => {
            expectation.throws = error;
            return expect;
          },
          times: createTimes(target, expectation),
        },
      );
      return expect;
    }
    if (prop === 'spy') {
      return (spy: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const expectation: VitezillaExpectation = { spy, stack: getCleanStack() };
        target.rootNode.addExpectation(target.path, expectation);
        return { times: createTimes(target, expectation) };
      };
    }
    if (prop === 'getMockCalls') return () => target.rootNode.getCalls(target.path);

    if (prop === 'mock') return (value: any) => target.rootNode.setValue(target.path, value);

    if (prop === 'mockAllow') return () => target.rootNode.allow(target.path);

    if (prop === 'mockAllowMethod') return () => target.rootNode.addExpectation(target.path, null);

    if (prop === 'mockPath') return target.path;

    const key = prop.toString();
    let child: Target = target.children[key] as Target;
    if (!child) {
      const path = target.path ? `${target.path}.${key}` : key;

      child = new Proxy({ path, children: {}, rootNode: target.rootNode }, deepMockHandler);
      target.children[key] = child;
    }
    return child;
  },
  // not to be called
  apply: notAllowed('apply'),
  ownKeys: notAllowed('ownKeys'),
  has: notAllowed('has'),
  getPrototypeOf: notAllowed('getPrototypeOf'),
  setPrototypeOf: notAllowed('setPrototypeOf'),
  isExtensible: notAllowed('isExtensible'),
  preventExtensions: notAllowed('preventExtensions'),
  set: notAllowed('set'),
  deleteProperty: notAllowed('deleteProperty'),
  construct: notAllowed('construct'),
  getOwnPropertyDescriptor: notAllowed('getOwnPropertyDescriptor'),
  defineProperty: notAllowed('defineProperty'),
};

const autoCleanupNodes: VitezillaNode[] = [];

export function deepMock<T>(name: string, autoCleanup = true) {
  const rootNode = new VitezillaNode(name);
  const proxy = rootNode.getProxy() as T;
  const mock = new Proxy({ path: '', children: {}, rootNode }, deepMockHandler) as any as VitezillaDeep<T>;
  if (autoCleanup) autoCleanupNodes.push(rootNode);
  return [proxy, mock, rootNode] as const;
}

afterEach(() => {
  try {
    for (const node of autoCleanupNodes) node.verify();
  } finally {
    for (const node of autoCleanupNodes) node.disable();
    autoCleanupNodes.length = 0;
  }
});
