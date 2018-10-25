const assert = require('assert'); // built-in module
const format = require('pretty-format'); // installed package

module.exports = (received, expected, message) => {
  assert.deepStrictEqual(received, expected, message);
  /*
  try {
    // call assert.deepStrictEqual
  } catch (error) {
    process.stdout.write(`Failed:   ${error.message}\n`);
    // output Expected: and format expected value
    // output Received: and format received value
  }
  */
};
