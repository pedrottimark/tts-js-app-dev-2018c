// const coefficients = [3, -5, 4].reverse();
const coefficients = [4, -5, 3];

const x = parseFloat(process.argv[2] || 0); // command line option
let y = 0;

for (let i = coefficients.length - 1; i >= 0 ; i -= 1) {
  y = y * x + coefficients[i];
}

console.log(y); // computed
console.log(((0 * x + 3) * x - 5) * x + 4) // computed without loop
console.log(3 * x ** 2 - 5 * x + 4); // expected with exponents
