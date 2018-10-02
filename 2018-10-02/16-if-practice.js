const FREEZING_F = 32;

const input = prompt('length in ft or in');

const unit = input.slice(-2);
const length = parseFloat(input.slice(0, -2));

console.log(length, unit);

if (unit === 'ft') {
  console.log(`${length}ft is equal to ${'TODO'}in`);
} else {
  console.log(`${length}in is equal to ${'TODO'}ft`);
}
