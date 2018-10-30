require('isomorphic-fetch')
const format = require('pretty-format');

const port = process.argv[2] || 3000;
const host = 'localhost';
const url = `http://${host}:${port}/items`;

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    completed: false,
    doerId: 'lesson-9',
    text: 'Read and write requests which apply the REST API pattern.',
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
