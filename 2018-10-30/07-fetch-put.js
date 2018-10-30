require('isomorphic-fetch')
const format = require('pretty-format');

const port = process.argv[2] || 3000;
const host = 'localhost';
const id = 92;
const url = `http://${host}:${port}/items/${id}`;

fetch(url, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 92,
    doerId: 'lesson-9',
    completed: true,
    text: 'Call `fetch` to make `GET`, `DELETE`, `PUT`, and `POST` requests.'
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
