// FIXME: store actual call parameters and let the test retrieve them?

export interface VitezillaExpectation {
  stack: string;
  spy?: (...args: any[]) => any;
  args?: any[];
  returns?: any;
  throws?: Error;
}

export interface VitezillaTimes {
  times: (count: number) => void;
}

export interface VitezillaAsyncFunction<T> {
  andResolve: T;
  andReject: (error: Error) => VitezillaTimes;
  times: (count: number) => void;
}

export interface VitezillaSyncFunction<T> {
  andReturn: T;
  andThrow: (error: Error) => VitezillaTimes;
  times: (count: number) => void;
}

export type VitezillaFunction<T extends (...args: any[]) => any> = ReturnType<T> extends Promise<infer TP>
  ? TP extends boolean // if we don't catch boolean manually, boolean promises will break
    ? VitezillaAsyncFunction<(result: boolean) => VitezillaTimes>
    : TP extends void
    ? VitezillaAsyncFunction<() => VitezillaTimes>
    : VitezillaAsyncFunction<(result: TP) => VitezillaTimes>
  : ReturnType<T> extends void
  ? VitezillaSyncFunction<() => VitezillaTimes>
  : VitezillaSyncFunction<(result: ReturnType<T>) => VitezillaTimes>;

export interface VitezillaProperty<T> {
  mock: (value: T) => void;
  mockAllow: () => void;
  mockAllowMethod: () => void;
  mockPath: string;
}

export type VitezillaDeep<T> = { [TKey in keyof T]: VitezillaDeep<T[TKey]> } & VitezillaProperty<T> &
  (T extends (...args: any[]) => any
    ? {
        spy: (fn: T) => VitezillaTimes;
        expect: ((...args: Parameters<T>) => VitezillaFunction<T>) & VitezillaFunction<T>;
        getMockCalls: () => Array<Parameters<T>>;
      }
    : unknown);

export type VitezillaAssimilated<T> = T extends (...args: any[]) => any
  ? {
      spy: (fn: T) => VitezillaTimes;
      expect: ((...args: Parameters<T>) => VitezillaFunction<T>) & VitezillaFunction<T>;
      getMockCalls: () => Array<Parameters<T>>;
    }
  : unknown;

export type VitezillaAssimilatedMap<T> = { [TKey in keyof T]: VitezillaAssimilated<T[TKey]> };
