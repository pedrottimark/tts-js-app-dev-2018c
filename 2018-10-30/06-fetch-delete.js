require('isomorphic-fetch');

const port = process.argv[2] || 3000;
const host = 'localhost';
const id = 91;
const url = `http://${host}:${port}/items/${id}`;

fetch(url, {
  method: 'DELETE',
}).then(response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
}).catch(error => {
  console.error(error.message);
});
