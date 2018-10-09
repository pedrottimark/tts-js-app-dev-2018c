// Given coordinate and nDigits as numbers,
// return coordinate as string with specific number of digits after point.
const getFixed = (coordinate, nDigits) => coordinate.toFixed(nDigits);

// Given coordinate as number,
// return coordinate as string with default number of digits after point.
const getString = coordinate => coordinate.toString();

const examples = [
  1 / 2,
  1 / 4,
  7 / 8,
  29 / 63,
];

const n = 3;

for (let i = 0; i < examples.length; i += 1) {
  const example = examples[i];

  // TODO initialize gotFixed for n digits
  // TODO initialize gotString
  // TODO if length of gotFixed is less than length of gotString
  // TODO then output gotFixed
  // TODO else output gotString
}
