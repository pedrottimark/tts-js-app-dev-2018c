const assert = require('assert'); // built-in module
// const chalk = TODO
const format = require('pretty-format'); // installed package

module.exports = (received, expected, message) => {
  try {
    assert.deepStrictEqual(received, expected, message);
  } catch (error) {
    process.stdout.write('\n');
    process.stdout.write(`Failed:   ${error.message}\n`);
    process.stdout.write(`Expected: ${format(expected)}\n`); // TODO color of formatted value is green
    process.stdout.write(`Received: ${format(received)}\n`); // TODO color of formatted value is red
  }
};
