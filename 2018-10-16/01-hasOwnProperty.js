const criteria = {
  vegetables: false,
  fruits: false,
  grains: false,
  protein: false,
  oils: false,
  fluids: false,
};

process.argv.slice(2).forEach(arg => {
  // TODO
  // if criteria has arg as the key of one of its own properties,
  // assign the value of the property to true.
});

console.log(criteria);
