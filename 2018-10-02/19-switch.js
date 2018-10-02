const FREEZING_F = 32;
const ABSOLUTE_ZERO_C = -273.15;

const input = prompt('temperature in C or K or F');

const unitInput = input.slice(-1);
const temperature = parseFloat(input.slice(0, -1));

console.log(temperature, unitInput);

let temperatureC = temperature;
switch (unitInput) {
  case 'K':
    temperatureC = temperature + ABSOLUTE_ZERO_C;
    break;

  case 'F':
    temperatureC = (temperature - FREEZING_F) / 1.8;
    break;
}

const unitOutput = prompt('convert to unit C or K or F');

let temperatureOutput = temperatureC;
switch (unitOutput) {
  case 'K':
    temperatureOutput = temperatureC - ABSOLUTE_ZERO_C;
    break;

  case 'F':
    temperatureOutput = FREEZING_F + temperatureC * 1.8;
    break;
}

const formattedInput = `${temperature} ${unitInput === 'K' ? '' : '°'}${unitInput}`;
const formattedOutput = `${temperatureOutput} ${unitOutput === 'K' ? '' : '°'}${unitOutput}`;

console.log(`${formattedInput} is equal to ${formattedOutput}`);
