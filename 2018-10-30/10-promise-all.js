require('isomorphic-fetch');
const format = require('pretty-format');

const port = process.argv[2] || 3000;
const host = 'localhost';
const doerId = 'lesson-9';
const url0 = `http://${host}:${port}/doers/${doerId}`;
const url1 = `http://${host}:${port}/doers/${doerId}/items`;

const convertFromJSON = response => {
  if (!response.ok) {
      throw new Error(response.statusText);
  }

  return response.json();
};

Promise.all([
  fetch(url0).then(convertFromJSON),
  fetch(url1).then(convertFromJSON)
]).then(([
  doer,
  items
]) => {
  console.info(format(doer));
  console.info(format(items));
}).catch(error => {
  console.error(error.message);
});
