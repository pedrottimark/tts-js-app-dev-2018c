const input = prompt('length in cm or mm');

const unit = input.slice(-2);
const length = parseFloat(input.slice(0, -2));

console.log(length, unit);

//const lengthMeter = unit === 'cm' ? TODO : TODO;

console.log(`${length}${unit} is equal to ${'TODO'}m`);
