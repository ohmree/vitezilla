import type { Events } from 'webextension-polyfill';
import { type VitezillaDeep, VitezillaError } from 'vitezilla';
// aeslint-disable-next-line @typescript-eslint/no-unused-vars -- Without this we get a type-related build error.
import { vi } from 'vitest';

export class VitezillaEvent<T extends (...args: any[]) => any> {
  private listeners: T[] = [];

  private disabled = false;

  private prefix: string;

  public constructor(prefix: string) {
    this.prefix = prefix;
  }

  public addListener = vi.fn((callback: T) => {
    this.disabledCheck('addListener');
    this.listeners.push(callback);
  });

  public removeListener = vi.fn((callback: T) => {
    this.disabledCheck('removeListener');
    this.listeners = this.listeners.filter(listener => listener !== callback);
  });

  public hasListener = vi.fn((callback: T) => {
    this.disabledCheck('hasListener');
    return this.listeners.includes(callback);
  });

  public hasListeners = vi.fn(() => {
    this.disabledCheck('hasListeners');
    return this.listeners.length > 0;
  });

  public disable() {
    this.disabled = true;
  }

  public emit(...args: Parameters<T>) {
    for (const listener of this.listeners) {
      listener(...args);
    }
  }

  private disabledCheck(what: string) {
    if (this.disabled)
      throw new VitezillaError(
        `Mock "${this.prefix}.${what}" has been used after tests have finished! You might have a memory leak there.`,
      );
  }
}

export type VitezillaEventParameters<T> = T extends (...args: any[]) => any ? Parameters<T> : any[];

export type VitezillaEventFunction<T> = T extends Events.Event<infer TFun>
  ? (...args: VitezillaEventParameters<TFun>) => void
  : (...args: any[]) => void;

export type VitezillaEventOf<T> = T extends VitezillaDeep<infer TD>
  ? VitezillaEvent<VitezillaEventFunction<TD>>
  : unknown;

export function mockEvent<T>(builder: VitezillaDeep<T>) {
  const mock = new VitezillaEvent<VitezillaEventFunction<T>>(builder.mockPath);
  builder.mock(mock as T);
  return mock;
}
