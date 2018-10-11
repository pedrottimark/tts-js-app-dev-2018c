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

const filteredAll = items.filter(item => true);
console.log(filteredAll);

const filteredNone = items.filter(item => false);
console.log(filteredNone);

/*
const filteredCompleted = items.filter(item => TODO);
console.log(filteredCompleted);
*/

/*
const filteredUncompleted = items.filter(item => TODO);
console.log(filteredUncompleted);
*/
