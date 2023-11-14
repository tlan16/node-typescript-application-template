import assert from "node:assert";
import {describe, it} from "node:test";
import {getWelcomeMessage} from "../getWelcomeMessage";
import * as getWelcomeMessageLib from "../getWelcomeMessage";

void describe('getWelcomeMessage', () => {
  void it("SHOULD return non-empty string", () => {
    const actual = getWelcomeMessage();
    assert.strictEqual(actual.length > 0, true)
  })

  void describe("GIVEN mocked welcome message", () => {
    void it("SHOULD return mocked welcome message", (t) => {
      const expected = "Hello, World!";

      const fn = t.mock.method(getWelcomeMessageLib, "getWelcomeMessage");
      fn.mock.mockImplementation(() => expected);

      const actual = getWelcomeMessage();
      assert.strictEqual(actual, expected)
    })
  })
});
