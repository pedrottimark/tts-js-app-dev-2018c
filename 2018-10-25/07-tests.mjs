const deepStrictEqual = require('./07-deep-strict-equal.js'); // TODO 1

const products = require('./07-products.js'); // TODO 2 data for tests
const {
  findById,
  filterByCategory
} = require('./07-array-methods'); // TODO 3 functions to test

const bananas = {
  id: '4011',
  category: 'fruits',
  description: 'bananas, yellow'
};
deepStrictEqual(
  findById(products, '4011'),
  bananas,
  'find id that does exist'
);

deepStrictEqual(
  findById(products, ''),
  undefined,
  'find by id that does not exist'
);

const vegetables = [
  {
    id: '4062',
    category: 'vegetables',
    description: 'cucumber, green ridge short'
  },
  {
    id: '4078',
    category: 'vegetables',
    description: 'corn, yellow'
  },
];
deepStrictEqual(
  filterByCategory(products, 'vegetables'),
  vegetables,
  'filter by category that does exist'
);

deepStrictEqual(
  filterByCategory(products, 'nuts'),
  [],
  'filter by category that does not exist'
);
