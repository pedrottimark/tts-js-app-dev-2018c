// Given nDigits as number,
// return function which given coordinate as number,
// returns coordinate as string with at most nDigits after decimal point.
const getFixer = nDigits => coordinate => {
  const gotFixed = coordinate.toFixed(nDigits);
  const gotString = coordinate.toString();

  return gotFixed.length < gotString.length ? gotFixed : gotString;
};

const examples = [
  1 / 2,
  1 / 4,
  7 / 8,
  29 / 63,
];

const getFixed1 = getFixer(1);
const getFixed2 = getFixer(2);
const getFixed3 = getFixer(3);

for (let i = 0; i < examples.length; i += 1) {
  const example = examples[i];
  console.log(getFixed1(example), getFixed2(example), getFixed3(example), example);
}
