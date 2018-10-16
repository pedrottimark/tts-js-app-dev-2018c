// To display lines of labeled values as two columns with monospace alignment:
// given the strings which will describe the values,
// return function which given each string, returns the label:
// string, colon, space, and enough padding spaces to align the value.
const getLabelPrinter = (...strings) => {
  const maxLength = strings.reduce(
    (max, string) => (string.length > max ? string.length : max),
    0,
  );
  return string => `${string}: ${' '.repeat(maxLength - string.length)}`;
};

(() => {
  const expected = '"JavaScript"';
  const received = '"Delightful Javascript Testing"';

  const labelExpected = 'Expected value';
  const labelReceived = 'Received string';
  const printLabel = getLabelPrinter(labelExpected, labelReceived);

  console.log(`${printLabel(labelExpected)}${expected}`);
  console.log(`${printLabel(labelReceived)}${received}`);
})();

(() => {
  const expected = '"JavaScript"';
  const received = '["Delightful", "Javascript", "Testing"]';

  const labelExpected = 'Expected value';
  const labelReceived = 'Received array';
  const printLabel = getLabelPrinter(labelExpected, labelReceived);

  console.log(`${printLabel(labelExpected)}${expected}`);
  console.log(`${printLabel(labelReceived)}${received}`);
})();

(() => {
  const expected = '"JavaScript"';
  const received = 'Set {"Delightful", "Javascript", "Testing"}';

  const labelExpected = 'Expected value';
  const labelReceived = 'Received set';
  const printLabel = getLabelPrinter(labelExpected, labelReceived);

  console.log(`${printLabel(labelExpected)}${expected}`);
  console.log(`${printLabel(labelReceived)}${received}`);
})();
