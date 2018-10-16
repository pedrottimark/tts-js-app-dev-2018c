const criteria = {
  vegetables: false,
  fruits: false,
  grains: false,
  protein: false,
  oils: false,
  fluids: false,
};

process.argv.slice(2).forEach(arg => {
  if (criteria.hasOwnProperty(arg)) {
    criteria[arg] = true;
  }
});

const foods = [
  {
    name: 'stir fry',
    categories: ['vegetables', 'grains', 'protein', 'oils'],
  },
  {
    name: 'fruit smoothie',
    categories: ['fruits', 'oils'],
  },
  {
    name: 'iced tea',
    categories: ['fluids'],
  },
];

foods.filter(food => Object.keys(criteria).reduce(
  (result, key) => criteria[key] ? result && food.categories.includes(key) : result,
  true
)).forEach(food => {
  console.log(food.name);
});
