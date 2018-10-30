require('isomorphic-fetch')
const format = require('pretty-format');

const port = process.argv[2] || 3000;
const host = 'localhost';
const id = 93;
const url = `http://${host}:${port}/items/${id}`;

fetch(url, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    completed: true,
  }),
}).then(response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}).then(item => {
  console.info(format(item));
}).catch(error => {
  console.error(error.message);
});
