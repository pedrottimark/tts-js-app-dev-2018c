# Lesson 4: functions, part 2

A function definition consists of any of the following:

* name describes **purpose**
* arguments receive **input**
* body does **work**
* return gives **output**

Just as you can assign expressions to variables to achieve the goal “Don’t Repeat Yourself,” you can move expressions or statements into function literals, and then:

* assign them to variables
* provide them as arguments to functions, especially array methods

## 01-for-push

The array [`push`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method appends an item at the end.

```js
const outputs = [];
for (let i = 0; i < inputs.length; i += 1) {
  outputs.push(stringifyCoordinate(inputs[i]));
}
```

1. In your code editor, open the `01-for-push.js` file
2. In Terminal: `node 01-for-push.js`

Will a volunteer trace the code line by line.

## 02-array-map

If you move statements from bodies of `for` loops into function literals, then you can replace loops with array methods.

The array [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method:

* returns a new array whose length is **equal** to the length of the original array
* has as its argument a callback function which returns the **mapped** value for each item

```js
const outputs = inputs.map(stringifyCoordinate);
```

1. In your code editor, open the `02-array-map.js` file
2. In Terminal: `node 02-array-map.js`

## 03-anonymous-function

Because functions are values in JavaScript, you can use them directly instead of assigning them to variables.

An arrow function literal with implicit output is especially readable as a callback function:

```js
// Convert arrays of objects to arrays of strings:
const outputs = inputs.map(
  point => `${stringifyCoordinate(point.x)},${stringifyCoordinate(point.y)}`
);
```

1. In your code editor, open the `03-anonymous-function.js` file
2. In Terminal: `node 03-anonymous-function.js`

## 04-object-destructuring

With a similar **literal** notation, put together and take apart an object.

Will a volunteer trace the following code line by line:

```js
// Put together at right of = with object literal notation
const point = { x: 1 / 4, y:  7 /  8 };

// Take apart at left of = with object destructuring
const {x, y} = point;

console.log(x === point.x, y === point.y);
```

Just as object destructuring can initialize variables in assignment statement, it can initialize variables in function arguments:

```js
const stringifyPoint = point => `${stringifyCoordinate(point.x)},${stringifyCoordinate(point.y)}`;
```

```js
const stringifyPoint = ({x, y}) => `${stringifyCoordinate(x)},${stringifyCoordinate(y)}`;
```

1. In your code editor, open the `04-object-destructuring.js` file
2. In Terminal: `node 04-object-destructuring.js`
3. In your code editor:
    * move `stringifyPoint` assignment with dot notation from outside comment to inside comment
    * move `stringifyPoint` assignment with destructuring from inside comment to outside comment
4. In Terminal: `node 04-object-destructuring.js`

## 05-chain-methods

The array [`join`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method returns a string which consists of the items (converted to strings) joined by a joiner string.

Because the `map` method returns an array, you can call `map` and then `join` in a **chain**.

```js
const output = inputs.map(stringifyPoint).join(' ');
```

Will a volunteer say what is the type of `output`.

1. In your code editor, open the `05-chain-methods.js` file
2. In Terminal: `node 05-chain-methods.js`

## 06-document-write

The global [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) object represents the web page loaded in the browser. It provides functionality globally to the document, including creating new elements in the document.

The [`document.write`](https://developer.mozilla.org/en-US/docs/Web/API/Document/write) method writes a string of markup into the web page.

1. In your code editor, open the `06-document-write.js` and `06-document-write.html` files
2. In Explorer or Finder, double-click the `06-document-write.html` file to open it in a browser
3. Right-click in the browser, click `Inspect` to open developer tools pane, and then in `Elements` tab, expand to see `points` attributes of `polyline` elements
4. See the effect of decreasing precision from `4` to `3` to `2` to `1`
    * edit the `06-document-write.js` file, and then save your change
    * refresh the browser tab
    * in `Elements` tab, expand to see `points` attributes of `polyline` elements

Will a volunteer explain the purpose of the elements in the `06-document-write.html` file.

## 07-json-parse

The [`JSON.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) method converts a JSON string to a JavaScript value. For example, convert data after receiving it as a string from a server.

```js
const list = JSON.parse('[{"id":1,"text":"Done that","completed":true},{"id":2,"text":"Do this","completed":false}]');
```

Will a volunteer say what are the properties of an object which represents item in “to do” list.

In pairs, collaborate to map data objects to list items or table rows:

1. In your code editor, edit the `07-json-parse.js` file:
    * In `formatItem` function, replace `TODO` with HTML tags for item or row and `${…}` for object properties
    * In `formatItems` function , replace `TODO` with HTML tags for list or table
2. In Terminal: `node 07-json-parse.js`
3. In your code editor, edit the `07-json-parse` file to add attribute with ternary expression in `<li>` or `<tr>` tag:
    * `class="completed"` if `completed` property is true
    * `class="uncompleted"` if `completed` property is false
4. In Terminal: `node 07-json-parse.js`

## 08-document-write

In pairs, collaborate to display formatted todo list in web page:

1. In your code editor, edit the `08-document-write.js` file to copy your template literals from the `07-json-parse.js` file
2. In Explorer or Finder, double-click the `08-document-write.html` file to open it in a browser
3. Right-click in the browser, click `Inspect` to open developer tools pane, and then click `Console` to see if there are any errors
4. In your code editor, edit the `08-document-write.js` file to replace `item` argument with object destructuring of `text` and `completed` properties in `formatItem` function, and then save your change
5. Refresh the browser tab
6. In your code editor, edit the `08-document-write.js` file to add another todo item object in the JSON string
7. Refresh the browser tab

Will a volunteer explain the `style` rules in the `08-document-write.html` file.

## 09-object-keys

An array has `length` property for number of items, but an object doesn’t.

The [`Object.keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) method returns as an array the keys of the object argument.

```js
const item = {
  id: 1,
  text: 'Done that',
  completed: true
};

const keys = Object.keys(item);

console.log(keys.length);
```

1. In your code editor, open the `09-object-keys.js` file
2. In Terminal: `node 09-object-keys.js`

## 10-array-forEach

The array [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method is function form of `for` loop.

The callback functions for most array methods receive three arguments:

* the current item
* its index
* the original array

```js
const item = {
  id: 1,
  text: 'Done that',
  completed: true
};

const keys = Object.keys(item);

keys.forEach((key, i) => {
  console.log(i, key, item[key]);
});
console.log(keys.length);
```

1. In your code editor, open the `10-array-forEach.js` file
2. In Terminal: `node 10-array-forEach.js`

Will a volunteer trace the code line by line.

Notice a difference in callback functions:

* in `map` method, function returns a value: often as an implicit output; otherwise by `return` statement
* in `forEach` method, function doesn’t return value: therefore a block encloses the function body, even if only one statement, and body has no `return` statement

## 11-array-filter

The [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method:

* returns a new array whose length is **less than or equal** to the length of the original array
* has as its argument a callback function which returns a **truthy** value to keep the item or a **falsey** value to omit the item

1. In your code editor, open the `11-array-filter.js` file
2. In Terminal: `node 11-array-filter.js`
3. Edit the `11-array-filter.js` file
    * Replace `TODO` with an expression in `filteredCompleted` and `filteredUncompleted` callbacks
    * Comment out the comments: `///*` and `//*/`
4. In Terminal: `node 11-array-filter.js`

## 12-array-filter

The [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method is an idiom in a **pure** function to delete an item from an array.

For example, given an array of todo item objects and an `id` value, delete an item which is no longer relevant.

```js
// Given an array of todo item objects and an id value, return a new array in which:
// * item with given id property is omitted
// * other items are kept
const deleteItem = (array, id) => array.filter(item => item.id !== id);
```

1. In your code editor, open the `12-array-filter.js` file
2. In Terminal: `node 12-array-filter.js` press space bar, type number between 0 and 3, and then press `enter` or `return`

Will a volunteer say what happens if no item object has the given id property.

## Homework

Continue to think about data for your project, for example in [List of public JSON APIs](https://github.com/toddmotto/public-apis) by Todd Motto
