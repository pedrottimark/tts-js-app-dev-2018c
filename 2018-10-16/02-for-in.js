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

foods.filter(food => {
  for (key in criteria) {
    // TODO
    // if property of criteria for key has truthy value,
    // and if the food categories array doesn’t include the key:
    // the food doesn’t match the criteria
  }
  return true;
}).forEach(food => {
  console.log(food.name);
});
