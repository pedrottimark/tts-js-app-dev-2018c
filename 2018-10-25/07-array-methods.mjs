// Given array of objects which have id property,
// return first object whose id property is equal to id argument;
// otherwise return undefined.
// module.exports.findById = (array, id) => array.find(
export const findById = (array, id) => array.find(
  object => object.id === id
);

// Given array of objects which have category property,
// return new array of object whose property is equal to category argument.
// TODO named export from ECMAScript module
module.exports.filterByCategory = (array, category) => array.filter(
  object => object.category === category
);
