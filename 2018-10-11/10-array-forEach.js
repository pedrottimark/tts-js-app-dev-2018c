const item = {
  id: 1,
  text: 'Done that',
  completed: true
};

const keys = Object.keys(item);

keys.forEach((key, i) => {
  console.log(i, key, item[key]);
});
console.log(keys.length);
