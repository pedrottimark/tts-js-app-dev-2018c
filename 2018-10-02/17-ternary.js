const FREEZING_F = 32;

const input = prompt('temperature in C or F');

const unit = input.slice(-1);
const temperature = parseFloat(input.slice(0, -1));

console.log(temperature, unit);

const temperatureOther = unit === 'F'
  ? (temperature - FREEZING_F) / 1.8
  : FREEZING_F + temperature * 1.8;

const unitOther = unit === 'F'
  ? 'C'
  : 'F';

console.log(`${temperature} °${unit} is equal to ${temperatureOther} °${unitOther}`);
