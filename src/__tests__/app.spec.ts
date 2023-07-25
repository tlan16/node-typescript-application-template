import * as app from '../app';

describe('app', () => {
  it.concurrent(`should return 'hello world'`, async () => {
    expect(await app.hello()).toBe('Hello World!');
  });

  describe('GIVEN mocked response', () => {
    it.concurrent('should return mocked value', async () => {
      const spy = jest.spyOn(app, 'hello').mockReturnValue(Promise.resolve('mocked value'));
      expect(await app.hello()).toBe('mocked value');
      spy.mockRestore();
    });
  });
});
