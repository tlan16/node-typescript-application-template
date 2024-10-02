import { describe, expect, it } from 'vitest';
import { environmentVariables } from '../environmentVariables';

describe('environmentVariables', () => {
  it.concurrent('SHOULD have LOG_LEVEL', () => {
    expect(environmentVariables.LOG_LEVEL).toBeTruthy();
  });
});
