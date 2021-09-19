import assert = require('assert')
import { hello } from './app'

it('should pass', () => {
    assert.equal(hello(), 'hello world')
})
