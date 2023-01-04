import { afterEach, beforeEach } from 'vitest';
import { VitezillaError } from './error';

interface TimeoutEntry {
  start: number;
  callback: () => void;
}

let currentTime = 0;
let timeouts: TimeoutEntry[] = [];

// fixme: remember stack in order to show the invocation afterwards
const setTimeout = (callback: () => void, ms: number) => {
  const entry: TimeoutEntry = {
    start: currentTime + ms,
    callback,
  };
  timeouts.push(entry);
  return entry;
};

const clearTimeout = (entry: TimeoutEntry) => {
  const index = timeouts.indexOf(entry);
  if (index >= 0) timeouts.splice(index, 1);
};

export function advanceTime(ms: number) {
  currentTime += ms;
  const remaining: TimeoutEntry[] = [];
  const expired: TimeoutEntry[] = [];
  for (const entry of timeouts) {
    if (entry.start <= currentTime) expired.push(entry);
    else remaining.push(entry);
  }
  timeouts = remaining;
  expired.sort((a, b) => a.start - b.start).forEach(e => e.callback());
}

export function mockTime() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  global.setTimeout = setTimeout as any;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  global.clearTimeout = clearTimeout as any;

  beforeEach(() => {
    timeouts = [];
    currentTime = 0;
  });

  afterEach(() => {
    if (timeouts.length !== 0)
      throw new VitezillaError(`${timeouts.length} timeouts still active after test has finished`, true);
  });
}
