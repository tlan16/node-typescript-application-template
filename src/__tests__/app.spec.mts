import { hello } from '../app.mjs'

it(`should return 'hello world'`, () => {
    expect(hello()).toBe('hello world');
})
