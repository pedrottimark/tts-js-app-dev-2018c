## Lesson 10: asynchronous JavaScript, part 2

## json-server

> You can use JSON Server to serve your HTML, JS and CSS, simply create a `./public` directory or use `--static` to set a different static files directory.

In the next lesson, we will see that the `dist` directory is a default for webpack.

```json
"scripts": {
  "start": "json-server --static ./dist --watch --delay=1000 ./01-db.json"
},
```

It’s a good habit even in practice project to separate database from web files.

## 01-app.html

> The default behavior of the `script` element  is to load JavaScript files as scripts, not modules.

> To support modules, the `module` value was added as a `type` option. Setting `type="module"` tells the browser to load code as a module instead of a script.

```html
<script src="01-app.js" type="module"></script>
```

1. In Terminal: `npm install`

2. In Terminal: `npm start`

3. In your code editor, open the `dist/01-app.html` file

4. In a Web browser:

    * open a new tab
    * type `localhost:3000/01-app.html` in address bar
    * press `enter` or `return` to request the file

5. In your code editor, open the `dist/01-fetch.js` file:

    * see the `import` statements
    * see the `const` and `let` variable declarations for application state
    * see the callback functions for events
    * see the render functions for elements
    * see `Promise.all` function to make fetch GET request

## fetch DELETE

To delete an uncompleted item as obsolete, click `Delete` at the right of the table row.

1. In the `dist/01-fetch.js` file:

    * replace `TODO 1a` comment in template literal with item id
    * replace `TODO 1b` comment in fetch options object with property
    * delete `/*` and `*/` surrounding `fetchDeleteItem` function

2. In your code editor, open the `dist/01-logic.js` file:

    * replace `TODO 1` comment with implicit return value of arrow function
    * delete `/*` and `*/` surrounding `deleteItem` function

3. In your code editor, open the `dist/01-app.js` file:

    * delete `//` comment at beginning of line which has `TODO 1a` comment
    * delete `//` comment at beginning of line which has `TODO 1b` comment
    * delete `/*` and `*/` surrounding `TODO 1c` comment

## fetch PUT

To toggle the completedness of an item, click the check box at the left of the table row.

1. In the `dist/01-fetch.js` file:

    * replace `TODO 2a` comment in template literal with item id
    * replace `TODO 2b` comment in fetch options object with properties
    * delete `/*` and `*/` surrounding `fetchPutItem` function

2. In the `dist/01-logic.js` file:

    * replace `TODO 2` comment with implicit return value of arrow function
    * delete `/*` and `*/` surrounding `findItem` function

3. In the `dist/01-app.js` file:

    * delete `//` comment at beginning of line which has `TODO 2a` comment
    * delete `//` comment at beginning of line which has `TODO 2b` comment
    * delete `/*` and `*/` surrounding `TODO 2c` comment

## fetch POST

To add an item, type text of a new item, and then click `Add` at the right of the form.

1. In the `dist/01-fetch.js` file:

    * replace `TODO 3` comment in fetch options object with properties
    * delete `/*` and `*/` surrounding `fetchPostItem` function

2. In the `dist/01-logic.js` file:

    * replace `TODO 3` comment with implicit return value of arrow function
    * delete `/*` and `*/` surrounding `addItem` function

3. In the `dist/01-app.js` file:

    * delete `//` comment at beginning of line which has `TODO 3a` comment
    * delete `//` comment at beginning of line which has `TODO 3b` comment
    * delete `/*` and `*/` surrounding `TODO 3c` comment

## Homework

Read free section [Loading Modules](https://leanpub.com/understandinges6/read#leanpub-auto-loading-modules) by Nicholas C. Zakas

Read blog article [A practical ES6 guide on how to perform HTTP requests using the Fetch API](https://medium.freecodecamp.org/a-practical-es6-guide-on-how-to-perform-http-requests-using-the-fetch-api-594c3d91a547) by Dler Ari

Read blog article [Here’s how you can actually use Node environment variables](https://medium.freecodecamp.org/heres-how-you-can-actually-use-node-environment-variables-8fdf98f53a0a) by Burke Holland
