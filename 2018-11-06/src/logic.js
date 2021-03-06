// Given items array and new item,
// return new array in which new item *precedes* other items.
export const addItem = (items, item) => [item, ...items];

// Given items array and id of an item,
// return new array which has all items *except* item which has id property.
export const deleteItem = (items, itemId) =>
  items.filter(item => item.id !== itemId);

// Given items array and id of an item,
// return item which has id property; otherwise undefined.
export const findItem = (items, itemId) =>
  items.find(item => item.id === itemId);

// Given items array and id of an item,
// return new array with *pure* update to completed property
// of item which has id property.
export const toggleCompleted = (items, itemId) =>
  items.map(
    item => (item.id === itemId ? {...item, completed: !item.completed} : item)
  );
