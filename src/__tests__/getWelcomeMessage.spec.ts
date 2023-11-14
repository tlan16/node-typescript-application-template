import assert from "node:assert";
import {describe, it} from "node:test";
import {getWelcomeMessage} from "../getWelcomeMessage";

void describe('getWelcomeMessage', () => {
  void it("SHOULD return non-empty string", () => {
    const actual = getWelcomeMessage();
    assert.strictEqual(actual.length > 0, true)
  })
});
