const assert = require('assert');

const remainder2 = require('./02-default-export.js'); // function to be tested

assert.deepStrictEqual(remainder2(0), 0, 'remainder of zero');
assert.deepStrictEqual(remainder2(1), 1, 'remainder of positive odd number');
assert.deepStrictEqual(remainder2(2), 0, 'remainder of positive even number');
assert.deepStrictEqual(remainder2(-1), -1, 'remainder of negative odd number');
assert.deepStrictEqual(remainder2(-2), 0, 'remainder of negative even number');
