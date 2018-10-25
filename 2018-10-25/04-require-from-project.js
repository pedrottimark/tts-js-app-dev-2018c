const deepStrictEqual = require('./04-deep-strict-equal.js');
const {remainder2, remainder3} = require('./03-named-exports.js');

const received = 8;
deepStrictEqual(remainder2(received), 1, 'expected remainder for divisor 2');
deepStrictEqual(remainder3(received), 1, 'expected remainder for divisor 3');
