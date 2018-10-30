require('isomorphic-fetch');
const format = require('pretty-format');

const port = process.argv[2] || 3000;
const host = 'localhost';
const url = `http://${host}:${port}/doers/lesson-9/items`;

fetch(url, {
  headers: {
    'Accept': 'application/json',
  },
}).then(response => {
  if (!response.ok) {
      throw new Error(response.statusText);
  }

  return response.json();
}).then(items => {
  console.info(format(items));
}).catch(error => {
  console.error(error.message);
});
