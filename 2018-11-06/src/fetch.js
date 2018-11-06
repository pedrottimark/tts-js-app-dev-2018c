const port = 3000;
const host = 'localhost';
const base = `http://${host}:${port}`;

// Given response return promise:
// rejects if not OK status
// otherwise fulfills with conversion to JSON
const convertFromJSON = response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

// Given doer id, get doer object.
export const fetchGetDoer = doerId =>
  fetch(`${base}/doers/${doerId}`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(convertFromJSON);

// Given doer id, get array of uncompleted items,
// and then sort descending by id property.
export const fetchGetItems = doerId =>
  fetch(`${base}/items?completed=false&doerId=${doerId}`, {
    headers: {
      Accept: 'application/json',
    },
  })
    .then(convertFromJSON)
    .then(
      items =>
        items.sort(
          (itemA, itemB) =>
            itemA.id === itemB.id ? 0 : itemA.id > itemB.id ? -1 : 1
        ) // sort descending
    );

// Given item id, delete item object.
export const fetchDeleteItem = itemId =>
  fetch(`${base}/items/${itemId}`, {
    method: 'DELETE',
  }).then(convertFromJSON);

// Put item object.
export const fetchPutItem = item =>
  fetch(`${base}/items/${item.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  }).then(convertFromJSON);

// Post item object without id property,
// and then return item object with id property.
export const fetchPostItem = item =>
  fetch(`${base}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  }).then(convertFromJSON);
