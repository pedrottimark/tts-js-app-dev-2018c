// Given nDigits as number,
// return function which given coordinate as number,
// returns coordinate as string with at most nDigits after decimal point.
const getFixer = nDigits => coordinate => {
  const gotFixed = coordinate.toFixed(nDigits);
  const gotString = coordinate.toString();

  return gotFixed.length < gotString.length ? gotFixed : gotString;
};

const stringifyCoordinate = getFixer(4);

const stringifyPoint = ({x, y}) => `${stringifyCoordinate(x)},${stringifyCoordinate(y)}`;

// Given input data as arrays of objects:
const inputs = [
  { x: 1 / 2, y: 29 / 63 },
  { x: 1 / 2, y: 7 / 8 },
  { x: 1 / 4, y: 7 / 8 },
];

// Convert arrays of objects to arrays of strings, and then join:
const output = inputs.map(stringifyPoint).join(' ');

console.log(inputs);
console.log(output);
