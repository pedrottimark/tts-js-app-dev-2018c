const assert = require('assert');

// assert.deepStrictEqual(received, expected, message);
assert.deepStrictEqual(0 % 2, 0, 'remainder of zero');
assert.deepStrictEqual(1 % 2, 1, 'remainder of positive odd number');
assert.deepStrictEqual(2 % 2, 0, 'remainder of positive even number');
assert.deepStrictEqual(-1 % 2, 1, 'remainder of negative odd number');
assert.deepStrictEqual(-2 % 2, 0, 'remainder of negative even number');
