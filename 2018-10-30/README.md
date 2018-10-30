## Lesson 9: asynchronous JavaScript, part 1

In *Understanding ECMAScript 6*, Nicholas C. Zakas explains:

> JavaScript engines can execute only one piece of code at a time, so they need to keep track of code that is meant to run.
> That code is kept in a job queue. Job execution runs from the first job in the queue to the last.
> When a user clicks a button, an event like `onClick` is triggered.
> That event might respond to the interaction by adding a new job to the back of the job queue.

## Learning objectives

1. Read server code that responds to `GET` and `POST` requests.

2. Read and write requests which apply the REST pattern.

3. Call `fetch` to make `GET`, `DELETE`, `PUT`, `POST` requests.

4. Write promise chains to handle success or failure of `fetch` requests.

## Hypertext Transfer Protocol (HTTP)

In [Hypertext Transfer Protocol](https://developer.mozilla.org/en-US/docs/Web/HTTP) a client makes a **request** to a server, and then the server sends a **response**.

A client provides a callback function whenever it makes a request, so it can “listen” for other events on the Web page while it waits for a response from the server.

[HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), also known as verbs, include:

* `GET` requests a representation of the specified resource (for example, a web page)
* `POST` submits data to the specified resource (for example, inputs from a form)
* `PUT` replaces the specified resource with the request payload (for example, stringified JSON)
* `PATCH` modifies the specified resource with the request payload (for example, stringified JSON)
* `DELETE` deletes the specified resource (for example, a purchase to remove from shopping cart)

[HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) indicate whether a request succeeded or failed:

* `200` means **OK** the request succeeded. The message body of the response:

    * to `GET` contains a representation of the requested resource
    * to `POST`, `PUT`, `PATCH` contains a resource which describes the result of the action

* `404` means the request failed because the resource is **Not Found**. In REST, the generic part of the “endpoint” might be valid, but the specific resource does not exist.

* `500` means the request failed because of an **Internal Server Error**.

## HTTP module in Node.js

```js
const http = require('http');
```

**Bonus**: [Node.js Docs http](https://nodejs.org/dist/latest-v10.x/docs/api/http.html#http_http)

### 01-http-get-200

The `createServer` method is a virtual constructor which returns a server instance.

Its argument is a function which the server calls whenever it receives a request:

The `req` object has properties to interpret a **request**, including `method` and `url`

The `res` object has properties to build a **response**, including:

* `writeHead` provides a status code and [headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
* `end` appends (the rest of) the body and completes the response

In a concise chain, call a method of the server instance to “listen” for requests on a specific port (for example, 80 is for requests on the World Wide Web).

```js
const port = parseInt(process.argv[2], 10) || 3000; // can give on command line

http.createServer((req, res) => {
  console.log(req.method, req.url);

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end(renderPage());
}).listen(port);

console.info(`Created HTTP server to listen on port: ${port}`);
```

1. In your code editor, open the `01-http-get-200.js` file

2. In Terminal: `node 01-http-get-200.js`

3. In a Web browser:

    * open a new tab
    * type `localhost:3000/` in address bar
    * press `enter` or `return` to make a request

4. Edit in address bar:

    * add `unexpected`
    * press `enter` or `return` to make a request

5. In Terminal: hold down `Ctrl` or `Control` key, and then press `C`

Will 3 volunteers each do one of the following:

* Trace the code and explain the order of lines in the console.
* Suggest a problem with the response to the second request.
* Say what happens if you type in the input box, and then click `Add`.

**Bonus**: [Node.js Docs http.ServerResponse](https://nodejs.org/dist/latest-v10.x/docs/api/http.html#http_class_http_serverresponse)

### 02-http-get-404

The response depends on the `url` property of the `req` object.

```js
http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(renderPage());
  } else {
    res.writeHead(404);
    res.end(`Not Found: ${req.url}`);
  }
}).listen(port);
```

1. In your code editor, open the `02-http-get-404.js` file

2. In Terminal: `node 02-http-get-404.js`

3. In a Web browser:

    * type `localhost:3000/` in address bar
    * press `enter` or `return` to make a request

4. Will a volunteer please trace the code

5. Edit in address bar:

    * add `unexpected`
    * press `enter` or `return` to make a request

6. Will a volunteer please trace the code

7. In Terminal: hold down `Ctrl` or `Control` key, and then press `C`

**Bonus**: To see a creative `404` response, visit in a Web browser: `https://egghead.io/unexpected`

### 03-http-get-500

Server developers think of `404` as an **external** error, whether someone mistypes in the address bar or a page on the site has an incorrect link.

Write code in a `try` statement with a `catch` block so the server keeps running after an **internal** error.

```js
http.createServer((req, res) => {
  console.log(req.method, req.url);

  try {
    if (req.url === '/' && req.method === 'GET') {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(renderPageX()); // intentional mispelling to throw an error
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
```

1. In your code editor, open the `03-http-get-500.js` file

2. In Terminal: `node 03-http-get-500.js`

3. In a Web browser:

    * type `localhost:3000/` in address bar
    * press `enter` or `return` to make a request

4. Will a volunteer please trace the code

5. Edit in address bar:

    * add `unexpected`
    * press `enter` or `return` to make a request

6. Will a volunteer please trace the code

7. In Terminal: hold down `Ctrl` or `Control` key, and then press `C`

A server keeps a private log of errors, but doesn’t include implementation details in the public response.

**Bonus**: [try...catch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

### 04-http-post

A `POST` request has a **stream** with `data` and `end` events, so that the Web server can respond to other requests if the body consists of much text (for example, from a `textarea` element).

```js
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
    } else { … }
  } catch (error) { … }
}).listen(port);
```

1. In your code editor, open the `04-http-post.js` file

2. In Terminal: `node 04-http-post.js`

3. In a Web browser:

    * type `localhost:3000/` in address bar
    * press `enter` or `return` to make a request

4. Will a volunteer please trace the code

5. Click in the `text of new item` box, type text, and then click the `Add` button

6. Will a volunteer please trace the code

7. Click in the `text of new item` box, type text

8. Will a volunteer please trace the code

9. In Terminal: hold down `Ctrl` or `Control` key, and then press `C`

**Bonus**: [Node.js Docs http.ClientRequest](https://nodejs.org/dist/latest-v10.x/docs/api/http.html#http_class_http_clientrequest)

## Representational State Transfer (REST)

REST is a pattern to **describe** an application programming interface (API) also known as “endpoints” so client-side JavaScript code in a Web page can exchange data with a server:

* If the data is an array of objects, the URL consists of a **plural noun**, like `/items`
* If the data is an item in an array, the URL has an **index** or **id**, like `/items/1`
* If the data is an object, the URL consists of a **singular noun**, like `/view`

For example, the `db/00-db.json` file contains data for an application to keep a to-do list.

A URL might include two levels of plural nouns, like `/doers/lesson-9/items`

Will a volunteer explain how the purchasers and their purchases are related. What is a name for this principle?

**Bonus**: [json-server: Get a full fake REST API with zero coding in less than 30 seconds](https://github.com/typicode/json-server)

## Fetch

The [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) function provides a generic definition of Request and Response objects. It returns a Promise that resolves to the Response to that request, whether it is successful or not.

It is a built-in global in browsers, but you need to install a package to call it in Node.js.

* The default is a `GET` request:

    ```js
    fetch(url)
    ```

* Provide options to make a request with another method and (if needed) send a “payload” of data as JSON:

    ```js
    fetch(url, {
        method: 'DELETE'
    });
    ```

    ```js
    fetch(url, {
        method: method, // 'PUT', 'PATCH', 'POST'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    ```

## Promise, part 1

A [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) is a an object which represents an asynchronous operation.

The `fetch` function returns the response as a promise, so you can write each callback function as a separate argument in a **chain** of `then` and `catch` methods.

> Each call to `then()` or `catch()` actually creates and returns another promise, which is resolved when the previous promise is fulfilled or rejected.

## npm scripts

1. In your code editor, open the `00-db.json` file

2. In your code editor, open the `package.json` file and find:

    ```js
    "scripts": {
      "start": "json-server ./00-db.json --delay=2000"
    },
    "dependencies": {},
    "devDependencies": {
      "isomorphic-fetch": "2.2.1",
      "json-server": "0.14.0",
      "pretty-format": "23.6.0"
    }
    ```

3. If you use Code editor, split your Terminal pane, and then in one pane:

    * `npm install`
    * `npm start`

## 05-fetch-get

3. In your code editor, open the `05-fetch-get.js` file

4. In another Terminal: `node 05-fetch-get.js`

5. See request in one Terminal and item in other Terminal

## 06-fetch-delete

1. In your code editor, open the `06-fetch-delete.js` file

2. In Terminal: `node 06-fetch-delete.js`

3. See request succeeded in one Terminal and see absence of item in the file

4. In Terminal: `node 06-fetch-delete.js`

5. See request failed in Terminal

## 07-fetch-put

1. In your code editor, open the `07-fetch-put.js` file

2. In Terminal: `node 07-fetch-put.js`

3. See request in Terminal and see replaced item in the file

## 08-fetch-patch

1. In your code editor, open the `08-fetch-patch.js` file

2. In Terminal: `node 08-fetch-patch.js`

3. See request in Terminal and see updated item in the file

## 09-fetch-post

1. In your code editor, open the `09-fetch-post.js` file

2. In Terminal: `node 09-fetch-post.js`

3. See request in Terminal and see appended item at the end of the file

## 10-promise-all

The `Promise.all` method whose argument is an array of promises from `fetch` calls to two “endpoints” on the server for the Todo List application. It returns a promise which is fulfilled when **every** promise has been resolved.

1. In your code editor, open `10-promise-all.js`

2. In Terminal: `node 10-promise-all.js`

3. See request in one Terminal and output in other Terminal

## Homework

Watch [Get started with the Fetch API](https://www.youtube.com/watch?v=Ncs6QI4Z5BE) by Jad Joubran (8:33)

Read [Understanding And Using REST APIs](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/) by Zell Liew

Read free chapter [Promises and Asynchronous Programming](https://leanpub.com/understandinges6/read#leanpub-auto-promises-and-asynchronous-programming) by Nicholas C. Zakas
