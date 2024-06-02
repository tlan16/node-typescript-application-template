import { describe, it } from 'node:test'
import { environmentVariables } from '../environmentVariables'
import assert from 'node:assert'

describe('environmentVariables', () => {
  it('SHOULD have LOG_LEVEL', () => {
    assert.ok(environmentVariables.LOG_LEVEL)
  })
})
