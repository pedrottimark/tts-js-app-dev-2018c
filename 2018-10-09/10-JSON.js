// Given configuration for noun,
// return function which given number,
// returns phrase for that number of the noun.
const getPluralizer = noun => noun.plural
  ? number => `${number} ${number === 1 ? noun.singular : noun.plural}`
  : number => `${number} ${noun.singular}${number === 1 ? '' : noun.suffix}`;

const nounThing = JSON.parse('{"singular":"thing","suffix":"s"}');
const pluralizeThing = getPluralizer(nounThing);
console.log(pluralizeThing(1));
console.log(pluralizeThing(0));
console.log(pluralizeThing(2));

const nounSheep = JSON.parse('{"singular":"sheep","suffix": ""}');
const pluralizeSheep = getPluralizer(nounSheep);
console.log(pluralizeSheep(1));
console.log(pluralizeSheep(3));

const nounOx = JSON.parse('{"singular":"ox","suffix":"en"}');
const pluralizeOx = getPluralizer(nounOx);
console.log(pluralizeOx(1));
console.log(pluralizeOx(2));

const nounInch = JSON.parse('{"singular":"inch","suffix":"es"}');
const pluralizeInch = getPluralizer(nounInch);
console.log(pluralizeInch(1.0));
console.log(pluralizeInch(1.5));

const nounGoose = JSON.parse('{"singular":"goose","plural":"geese"}');
const pluralizeGoose = getPluralizer(nounGoose);
console.log(pluralizeGoose(1));
console.log(pluralizeGoose(6));
