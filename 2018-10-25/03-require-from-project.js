const assert = require('assert');

const {remainder2, remainder3} = require('./03-named-exports.js');

const received = 7;
assert.deepStrictEqual(remainder2(received), 1, 'expected remainder for divisor 2');
assert.deepStrictEqual(remainder3(received), 1, 'expected remainder for divisor 3');
