import { equal } from 'assert/strict'
import { hello } from './app'

it('should pass', () => {
    equal(hello(), 'hello world')
})
