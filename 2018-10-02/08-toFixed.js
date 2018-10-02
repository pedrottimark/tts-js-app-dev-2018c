const FREEZING_F = 32;

const temperatureF = prompt('temperature in Fahrenheit');

const temperatureC = (temperatureF - FREEZING_F) / 1.8;

console.log(`${temperatureF} °F is approximately equal to ${temperatureC} °C`);
console.log(`${temperatureF} °F is approximately equal to ${temperatureC.toFixed(3)} °C`);
console.log(`${temperatureF} °F is approximately equal to ${temperatureC.toFixed(2)} °C`);
console.log(`${temperatureF} °F is approximately equal to ${temperatureC.toFixed(1)} °C`);
console.log(`${temperatureF} °F is approximately equal to ${temperatureC.toFixed(0)} °C`);
