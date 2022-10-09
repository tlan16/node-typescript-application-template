import { hello } from '../app.mjs'

it(`should return 'hello world'`, async () => {
    expect(await hello()).toBe('Hello World!');
})
