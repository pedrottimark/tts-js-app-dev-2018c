// Given nDigits as number,
// return function which given coordinate as number,
// returns coordinate as string with at most nDigits after decimal point.
const getFixer = nDigits => coordinate => {
  const gotFixed = coordinate.toFixed(nDigits);
  const gotString = coordinate.toString();

  return gotFixed.length < gotString.length ? gotFixed : gotString;
};

const stringifyCoordinate = getFixer(4);

const inputs = [
  1 / 2,
  1 / 4,
  7 / 8,
  29 / 63,
];

const outputs = inputs.map(stringifyCoordinate);

console.log(inputs);
console.log(outputs);
