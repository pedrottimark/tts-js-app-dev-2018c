// Given nDigits as number,
// return function which given coordinate as number,
// returns coordinate as string with at most nDigits after decimal point.
const getFixer = nDigits => coordinate => {
  const gotFixed = coordinate.toFixed(nDigits);
  const gotString = coordinate.toString();

  return gotFixed.length < gotString.length ? gotFixed : gotString;
};

const stringifyCoordinate = getFixer(4);

const stringifyPoints = points => points.map(
  ({x, y}) => `${stringifyCoordinate(x)},${stringifyCoordinate(y)}`
).join(' ');

// Given input data as arrays of objects:
const pointsJ = [
  { x: 1 / 2, y: 29 / 63 },
  { x: 1 / 2, y: 7 / 8 },
  { x: 1 / 4, y: 7 / 8 },
];
const pointsS = [
  { x: 7 / 8, y: 32 / 63 },
  { x: 2 / 3, y: 32 / 63 },
  { x: 2 / 3, y: 2 / 3 },
  { x: 7 / 8, y: 2 / 3 },
  { x: 7 / 8, y: 7 / 8 },
  { x: 3 / 5, y: 7 / 8 },
];

// Insert output strings into template string:
const output = [
  '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">',
  '<g transform="scale(200)">',
  '<desc>JavaScript community logo as a stick figure</desc>',
  `<polyline id="J" points="${stringifyPoints(pointsJ)}"></polyline>`,
  `<polyline id="S" points="${stringifyPoints(pointsS)}"></polyline>`,
  '</g>',
  '</svg>',
].join('');

// Put markup as string into Web page:
document.write(output);
