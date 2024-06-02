import { describe, it } from 'node:test'
import assert from 'node:assert'
import { logger } from '../logger'

describe('logger', () => {
  it('SHOULD have callable methods', () => {
    const methods = ['trace', 'debug', 'info', 'warn', 'error', 'fatal'] as const;
    for (const method of methods) {
      assert.strictEqual(typeof logger[method], 'function')
    }
  })
})
