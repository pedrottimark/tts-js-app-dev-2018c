// Given coordinate as number,
// return as string with 3 digits after point.
const getFixed3 = coordinate => coordinate.toFixed(3);

const examples = [
  1 / 2,
  1 / 4,
  7 / 8,
  29 / 63,
];

for (let i = 0; i < examples.length; i += 1) {
  const example = examples[i];
  console.log(getFixed3(example), example);
}
