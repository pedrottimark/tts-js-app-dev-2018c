// Given configuration for noun,
// return function which given number,
// returns phrase for that number of the noun.
const getPluralizer = noun => noun.plural
  ? number => `${number} ${number === 1 ? noun.singular : noun.plural}`
  : number => `${number} ${noun.singular}${number === 1 ? '' : noun.suffix}`;

const pluralizeThing = getPluralizer({
  singular: 'thing',
  suffix: 's',
});
console.log(pluralizeThing(1));
console.log(pluralizeThing(0));
console.log(pluralizeThing(2));

const pluralizeSheep = getPluralizer({
  singular: 'sheep',
  suffix: '',
});
console.log(pluralizeSheep(1));
console.log(pluralizeSheep(3));

const pluralizeOx = getPluralizer({
  singular: 'ox',
  suffix: 'en',
});
console.log(pluralizeOx(1));
console.log(pluralizeOx(2));

const pluralizeInch = getPluralizer({
  singular: 'inch',
  suffix: 'es',
});
console.log(pluralizeInch(1.0));
console.log(pluralizeInch(1.5));

const pluralizeGoose = getPluralizer({
  singular: 'goose',
  plural: 'geese',
});
console.log(pluralizeGoose(1));
console.log(pluralizeGoose(6));
