import { hello } from '../app';

describe('app', () => {
  it(`should return 'hello world'`, async () => {
    expect(await hello()).toBe('Hello World!');
  });
});
