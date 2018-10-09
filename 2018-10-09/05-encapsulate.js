// Given coordinate and nDigits as numbers,
// return coordinate as string whichever is shorter:
// with specific number of digits after point
// with default number of digits after point
const getFixed = (coordinate, nDigits) => {
  const gotFixed = coordinate.toFixed(nDigits);
  const gotString = coordinate.toString();

  // TODO return shorter string with ternary expression
};

const examples = [
  1 / 2,
  1 / 4,
  7 / 8,
  29 / 63,
];

const n = 3;

for (let i = 0; i < examples.length; i += 1) {
  const example = examples[i];
  console.log(getFixed(example, n), example);
}
