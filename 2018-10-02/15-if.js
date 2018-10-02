const FREEZING_F = 32;

const input = prompt('temperature in C or F');

const unit = input.slice(-1);
const temperature = parseFloat(input.slice(0, -1));

console.log(temperature, unit);

if (unit === 'F') {
  console.log(`${temperature} °F is equal to ${(temperature - FREEZING_F) / 1.8} °C`);
} else {
  console.log(`${temperature} °C is equal to ${FREEZING_F + temperature * 1.8} °C`);
}
