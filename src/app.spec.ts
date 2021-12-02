import * as assert from 'assert'
import { hello } from './app'

it('should pass', () => {
    assert.equal(hello(), 'hello world')
})
