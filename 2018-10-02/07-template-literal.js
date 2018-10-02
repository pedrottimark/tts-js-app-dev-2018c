const ABSOLUTE_ZERO_C = -273.15;

const temperatureC = prompt('temperature in Celsius');

const temperatureK = temperatureC - ABSOLUTE_ZERO_C;

const output = `${temperatureC} °C is equal to ${temperatureK} K`;

console.log(output);
