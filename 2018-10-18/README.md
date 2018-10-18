# Lesson 6: functions and objects

## object shorthand

If a variable for the value of an object property has the same name as the key, you can **omit the repeated name** in literal notation.

```js
// Given coordinates as numbers, return point as object.

// Instead of repeating names of properties:
const createPoint = (x, y) => ({x: x, y: y});

// You can omit repeated property names in ES2015:
const createPoint = (x, y) => ({x, y});
```

## object destructuring

With a similar literal notation, put together and **take apart** an object.

You can use object destructuring in variable declarations:

```js
// Instead repeating name of variable:
const x = point.x;
const y = point.y;

// You can omit repeated variable name in ES2015:
const {x, y} = point;
```

You can use object destructuring in function arguments:

```js
// Given point as object, return coordinates as string.

// Instead repeating name of argument:
const stringifyCoordinates = point => `${point.x},${point.y}`;

// You can omit repeated argument name in ES2015:
const stringifyCoordinates = ({x, y}) => `${x},${y}`;
```

**Bonus**: Read [Object Destructuring](https://leanpub.com/understandinges6/read#leanpub-auto-object-destructuring) by Nicholas C. Zakas

## 01-object

Example of responsive page which displays “cards” for plants which bloom during a month.

The [`document.write`](https://developer.mozilla.org/en-US/docs/Web/API/Document/write) method writes a string of markup into the web page.

To improve code in a way that doesn’t change its inputs or outputs is known as **refactoring**.

1. In Explorer or Finder, double-click the `01-object.html` file to open it in a browser:

    * Drag the right edge to decrease the width of the page
    * Drag the right edge back to the original width
    * Will a volunteer say a feature of CSS which can provide this layout

2. In your code editor, open the `01-object.js` file:

3. Edit at `TODO 1` comment:

    * Replace props arg and dot notation in template literals with object destructuring
    * Save your changes
    * Refresh the browser tab

4. Edit at `TODO 2` comment:

    * Replace props arg and dot notation in template literals with object destructuring
    * Save your changes
    * Refresh the browser tab

5. Edit at `TODO 3` comment:

    * Omit repeated names with object shorthand
    * Save your changes
    * Refresh the browser tab

Will a volunteer trace the following array `map` method and `renderPlant` callback function:

```js
const items = plants.map(renderPlant).join('');
```

To **render** is a term from React which means return objects which describe markup.

In this file, render means return markup as string.

**Bonus**: Read about properties for `flex` layout in CSS:
* [Flexible Box Layout](https://www.w3.org/TR/css-flexbox-1/)
* [Leveling up with FlexBox](http://www.zomigi.com/downloads/Leveling-Up-With-Flexbox_SmashingConf_140319.pdf) by Zoe Mickley Gillenwater

## constructor

In JavaScript, you can organize data/state and behavior/interaction with two patterns:

* functional: object with data properties is **argument** of function or is in **scope** of function closure
* object-oriented: object instances have data properties and function properties (also known as **methods**)

You will build React applications from components with the same two patterns:

* function components
* class components

In classic JavaScript, a **constructor** is a function that initializes an instance when you call it with the `new` keyword.

* For each property that is **individual** to an instance, assign the value to the key of `this` keyword in the constructor function.

* For each method that is **shared** by all instances, assign the value to the key of `prototype` keyword.

By convention, the name of a constructor function starts with an **U**ppercase letter.

[Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) (DOM) connects JavaScript code in script files to HTML markup in Web pages.

* DOM has a tree structure of **nodes**, including elements, text, and comments.
* Each node corresponds to an **object** which has methods and properties.
* A parent element has an **array-like** object of child nodes, also known as siblings.
* The attributes of an element are an **array-like** object whose items are objects with `name` and `value` properties.

For an example of object-oriented JavaScript, we will emulate text and element objects.

```js
// Given character data, construct instance of text node.
const Text = function (data) {
  this.nodeType = 3;
  this.data = data;
};
```

You might think of constructor function with `nodeType` and `data` properties as the “shape” of a cookie cutter, and the specific values as the decorations on a particular cookie.

```js
const textLily = new Text('Individual daylily flowers last only one day.');
const textSusan = new Text('Black-eyed Susan has yellow ray flowers and dark brown spherical centers.');
const textPhlox = new Text('Phlox are highly attractive to butterflies.');
```

As with object literals, you can construct multiple instances which have the same values, but are not equal:

![6 heart-shaped cookies with pink JS on yellow](cookies-JS.jpeg)

## 02-constructor

1. In your code editor, open the `02-constructor.js` file
2. In Terminal: `node 02-constructor.js`
3. Edit at `TODO 1` comment to initialize `childNodes` property to empty array
4. Edit at `TODO 2` comment to initialize `attributes` property to empty array
4. In Terminal: `node 02-constructor.js` and see additional properties in instance of paragraph element

**Bonus**: Read about properties:

* [`nodeType`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)
* [`tagName`](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName)
* [`childNodes`](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes)
* [`attributes`](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)

## prototype

The `prototype` property is an object which contains **methods** shared by all instances that you create by calling the constructor function.

In the body of a method, `this` refers to the current instance so you can get and set data properties.

Object-oriented JavaScript encourages **impure** methods to mutate properties of an instance.

## 03-prototype-appendChild

After you construct a DOM element, you can call its [`appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) method to add text nodes or other elements.

```html
<p>Individual daylily flowers last only one day.</p>
```

```js
const text = new Text('Individual daylily flowers last only one day.');

const p = new HTMLElement('p');
p.appendChild(text);
```

1. In your code editor, open the `03-prototype-appendChild.js` file

2.  If you don’t know which **impure** array method to append (that is, add to the end) an item, skim the information about `Array` at [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

3. Edit at `TODO 1` comment:

    * Append (that is, add to the end) the `child` argument to `childNodes` array of instance
    * In Terminal: `node 03-prototype-appendChild.js`

4. Edit at `TODO 2` comment:

    * Adapt the preceding code from `p` element to `li` element
    * In Terminal: `node 03-prototype-appendChild.js`

5. Edit at `TODO 3` comment:

    * Refactor statements as body of function, and then call it 3 times to add `li` elements to `ul` element
    * In Terminal: `node 03-prototype-appendChild.js`

## 04-prototype-setAttribute

After you construct a DOM element, you can call its [`setAttribute`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) method to set the value of an attribute.

```html
<img src="https://…" alt="daylily"/>
```

```js
img.setAttribute('src', 'https://…');
img.setAttribute('alt', 'daylily');
```

1. In your code editor, open the `04-prototype-setAttribute.js` file

2. Skim page about array [`find`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method at Mozilla Developer Network

3. Edit at `TODO 1` comment to find an attribute with the given name:

    * if it exists, assign the given value
    * otherwise add a new attribute

3. Edit at `TODO 2` comment to construct an `img` element, and then set its `src` and `alt` attributes

4. Edit at `TODO 3` comment to append elements to make a `li` element

5. In Terminal: `node 04-prototype-setAttribute.js`

## class

In ECMAScript 2015, the braces following a **class** enclose its methods without any `prototype` keywords.

Because the name follows `class` keyword, `constructor` is always the name of the constructor function.

In a class, write **concise methods** instead of arrow function literals:

```js
class Text {
  constructor(data) {
    this.nodeType = 3;
    this.data = data;
  }
}
```

You construct an instance of a class with `new` keyword and class name same as with constructor function.

```js
const text = new Text('Individual daylily flowers last only one day.');
```

Here is a difference that is easy to forget:

* In **class**: don’t separate methods with commas, nor semicolons
* In **object literal**: do separate methods with commas

**Bonus**: Read pages 165–190 [Introducing JavaScript Classes](https://leanpub.com/understandinges6/read#leanpub-auto-introducing-javascript-classes) by Nicholas C. Zakas

## 05-class

1. In your code editor, open the `05-class.js` file

2. Compare `Text` class to `Text` constructor function (preceding, in comment)

2. At `TODO 1` comment, convert `HTMLElement` constructor function to class with `constructor` as concise method

3. At `TODO 2` comment, move `appendChild` method into class as concise method

4. At `TODO 3` comment, move `setAttribute` method into class as concise method

4. At `TODO 4` comment, construct instances and call methods as suggested by comments to make equivalent DOM elements and text nodes to the HTML markup enclosed in the preceding `/*` and `*/` comments

5. In Terminal: `node 05-class.js`

## document

In a web browser, the global `document` object has methods which include:

* [`createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
* [`createTextNode`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)

The `createElement` and `createTextNode` methods are known as **virtual constructors**, because they hide whether or not they construct instance with `new` keyword.

## 06-document

1. In your code editor, open the `06-document.js` file

2. Adapt code from `05-class.js` file to create contents of `h3` element, however:

    * replace `new Text(…)` with `document.createTextNode(…)`
    * replace `new HTMLElement(…)` with `document.createElement(…)`

3. In Terminal: `node 06-document.js`

## Homework

1. Read free chapter [Understanding Objects](https://nostarch.com/download/samples/oojs_ch03.pdf) from *Principles of Object-Oriented JavaScript* by Nicholas C. Zakas

2. Read free chapter [Introducing JavaScript Classes](https://leanpub.com/understandinges6/read#leanpub-auto-introducing-javascript-classes) by Nicholas C. Zakas

3. Search for data related to your project.

    For example, I searched for information about plants:

    * [USDA Plants Database](https://plants.sc.egov.usda.gov/java/stateSearch)
    * [Clemson Cooperative Extension](https://hgic.clemson.edu/category/flowers/)
