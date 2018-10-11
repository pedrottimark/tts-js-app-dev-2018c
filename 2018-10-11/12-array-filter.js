// Given an array of todo item objects and an id value, return a new array in which:
// * item with given id property is omitted
// * other items are kept
const deleteItem = (array, id) => array.filter(item => item.id !== id);

const items = [
  {
    id: 1,
    text: 'Done that',
    completed: true,
  },
  {
    id: 2,
    text: 'Do this',
    completed: false,
  },
  {
    id: 3,
    text: 'To do or not to do',
    completed: false,
  },
];

const id = parseInt(process.argv[2], 10);
const updated = deleteItem(items, id);

console.log(items);
console.log(updated);
