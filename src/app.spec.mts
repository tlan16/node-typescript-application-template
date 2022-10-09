import { equal } from 'assert/strict'
import { hello } from './app.mjs'

it(`should return 'hello world'`, () => {
    equal(hello(), 'hello world')
})
