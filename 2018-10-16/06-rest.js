const getMaxLength = (...strings) => strings.reduce(
  (max, string) => (string.length > max ? string.length : max),
  0
);

const getPadding = (max, string) => ' '.repeat(max - string.length);

const printLabel = (max, string) => `${string}: ${getPadding(max, string)}`;

const lengthExpected = 10;
const lengthReceived = 11;
const valueReceived = 'abcdefghijk';
const collectionType = process.argv[2] || 'value';

const stringExpected = 'Expected length';
const stringReceivedLength = 'Received length';
const stringReceivedValue = `Received ${collectionType}`;

const maxLength = getMaxLength(
  stringExpected,
  stringReceivedLength,
  stringReceivedValue
);

console.log(`${printLabel(maxLength, stringExpected)}${lengthExpected}`);
console.log(`${printLabel(maxLength, stringReceivedLength)}${lengthReceived}`);
console.log(`${printLabel(maxLength, stringReceivedValue)}${valueReceived}`);
