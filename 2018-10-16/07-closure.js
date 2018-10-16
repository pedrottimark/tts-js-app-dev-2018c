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

const lengthExpected = 10;
const lengthReceived = 11;
const valueReceived = 'abcdefghijk';
const collectionType = process.argv[2] || 'value';

const stringExpected = 'Expected length';
const stringReceivedLength = 'Received length';
const stringReceivedValue = `Received ${collectionType}`;

const printLabel = getLabelPrinter(
  stringExpected,
  stringReceivedLength,
  stringReceivedValue
);

console.log(`${printLabel(stringExpected)}${lengthExpected}`);
console.log(`${printLabel(stringReceivedLength)}${lengthReceived}`);
console.log(`${printLabel(stringReceivedValue)}${valueReceived}`);
