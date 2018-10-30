'use strict';

const http = require('http');

// Initialize state of application.
let todos = [
  {completed: true, text: 'Did that'},
  {completed: false, text: 'Do this'},
];

// Given previous array and text string,
// return next array which has at end a new todo item with text.
const addItem = (todos, text) => todos.concat({
  completed: false,
  text: text,
});

// Given todo item as object, return markup as string.
const renderItem = todoItem => {
  const className = todoItem.completed ? 'completed' : 'uncompleted';
  const text = todoItem.text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<li class="${className}">${text}</li>`;
};

// Given todo items as array, return markup as string.
const renderPage = todoItems => [
  '<!DOCTYPE html>',
  '<html lang="en">',
  '<head><meta charset="utf-8"/><title>04-http-post</title></head>',
  '<body>',
  `<ul>${todoItems.map(renderItem).join('')}</ul>`,
  '<form action="/" method="post">',
  '<input type="text" name="textOfNewItem" placeholder="text of new item">',
  '<button type="submit">Add item</button>',
  '</form>',
  '</body>',
  '</html>',
].join('');

// Given URL-encoded string, return minimally decoded string.
const decode = string => string.replace(/\+/g, ' ').replace(/%2B/g, '+');

const port = parseInt(process.argv[2], 10) || 3000; // can give on command line

http.createServer((req, res) => {
  console.log(req.method, req.url);
  let body = '';

  try {
    if (req.url === '/' && req.method === 'GET') {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(renderPage(todos));
    } else if (req.url === '/' && req.method === 'POST') {
      req.on('data', function (chunk) {
        console.info('Called function for data event');

        body += chunk;
      });
      req.on('end', function () {
        console.info('Called function for end event');
        console.info(`Posted:\n${body}`);

        todos = addItem(todos, decode(body.replace('textOfNewItem=', '')));
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        res.end(renderPage(todos)); // display page with new todo item
      });

      console.info('Added callback functions for data and end events');
    } else {
      res.writeHead(404);
      res.end(`Not Found: ${req.url}`);
    }
  } catch (error) {
    console.error(error.message);

    res.writeHead(500);
    res.end('Server Error');
  }
}).listen(port);

console.info(`Created HTTP server to listen on port: ${port}`);
