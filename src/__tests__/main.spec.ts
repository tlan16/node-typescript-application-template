import { describe, expect, it, vi } from 'vitest';
import * as getWelcomeMessageLib from '../getWelcomeMessage';
import { main } from '../main';
import { randomUUID } from 'node:crypto';
import { logger } from '../utilities/logger';

describe('main', () => {
  it.concurrent('SHOULD call getWelcomeMessage', async () => {
    const spy = vi.spyOn(getWelcomeMessageLib, 'getWelcomeMessage');
    await main();
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it.concurrent('SHOULD log welcome message', async () => {
    const message = randomUUID();
    vi.spyOn(getWelcomeMessageLib, 'getWelcomeMessage').mockReturnValueOnce(message);
    const spy = vi.spyOn(logger, 'info');
    await main();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(message);
  });
});
