'use strict';

const http = require('http');

// Return markup as string.
const renderPage = () => [
  '<!DOCTYPE html>',
  '<html lang="en">',
  '<head><meta charset="utf-8"/><title>01-http-get-200</title></head>',
  '<body>',
  '<form action="/" method="post">',
  '<input type="text" name="textOfNewItem" placeholder="text of new item">',
  '<button type="submit">Add item</button>',
  '</form>',
  '</body>',
  '</html>',
].join('');

const port = parseInt(process.argv[2], 10) || 3000; // can give on command line

http.createServer((req, res) => {
  console.log(req.method, req.url);

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end(renderPage());
}).listen(port);

console.info(`Created HTTP server to listen on port: ${port}`);
