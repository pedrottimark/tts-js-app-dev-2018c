const deepStrictEqual = require('./05-deep-strict-equal.js');

const products = require('./06-products.js'); // data for tests
const {
  findById,
  filterByCategory
} = require('./06-array-methods'); // functions to test

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
