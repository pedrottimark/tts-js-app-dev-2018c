// const assert = require('assert');
import assert from 'assert';  // built-in module
// TODO chalk

// const format = require('pretty-format');
import format from 'pretty-format'; // installed package

// module.exports = (received, expected, message) => {
export default (received, expected, message) => {
  try {
    assert.deepStrictEqual(received, expected, message);
  } catch (error) {
    process.stdout.write('\n');
    process.stdout.write(`Failed:   ${error.message}\n`);
    process.stdout.write(`Expected: ${chalk.green(format(expected))}\n`);
    process.stdout.write(`Received: ${chalk.red(format(received))}\n`);
  }
};
