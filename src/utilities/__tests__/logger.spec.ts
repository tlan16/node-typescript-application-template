import { describe, expect, it } from 'vitest';
import { logger } from '../logger';

describe('logger', () => {
  it.concurrent('SHOULD have callable methods', () => {
    const methods = ['trace', 'debug', 'info', 'warn', 'error', 'fatal'] as const;
    for (const method of methods) {
      expect(typeof logger[method]).toStrictEqual('function');
    }
  });
});
