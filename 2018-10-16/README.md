# Lesson 5: functions, part 3

## 01-hasOwnProperty

The object [`hasOwnProperty`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) method returns as boolean whether or not the object has the specified key for one its **own** properties (as opposed to its **inherited** properties).

1. In your code editor, open the `01-hasOwnProperty.js` file
2. In Terminal: `node 01-hasOwnProperty.js`
3. Edit the file: for any args on command line, assign the values of any properties of `criteria` which have those keys to `true`
4. In Terminal: `node 01-hasOwnProperty.js` and type zero or more keys of `criteria` on command line

Will a volunteer trace the code line by line.

## 02-filter

The [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method:

* returns a new array whose length is **less than or equal** to the length of the original array
* has as its argument a callback function which returns a **truthy** value to keep the item or a **falsey** value to omit the item

The [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) statement iterates over all non-Symbol, enumerable properties of an object.

1. In your code editor, open the `02-for-in.js` file
2. In Terminal: `node 02-for-in.js`
3. Edit the file: for any args on command line, use `for...in` statement to filter foods whose `categories` include all criteria
4. In Terminal: `node 02-for-in.js` and type zero or more keys of `criteria` on command line

Will a volunteer trace the code line by line.

## 03-reduce

The array [`reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) method returns a value that accumulates the items.

Its arguments are the callback function and initial value of accumulator.

For each item in the original array, the `reduce` method calls the callback function 4 arguments:

* previous value of accumulator
* the item
* its index
* the original array

The [`Object.keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) method returns as an array the keys of the object argument.

The [`&&`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) conditional and operator returns:

* its first operand if it is falsey
* otherwise its second operand

If both operands are boolean, the result of conditional and operator is `true` if both are `true`.

1. In your code editor, open the `03-reduce.js` file
2. In Terminal: `node 03-reduce.js` and type zero or more keys of `criteria` on command line

Will a volunteer trace the code line by line.

## 04-map

The array [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method:

* returns a new array whose length is **equal** to the length of the original array
* has as its argument a callback function which returns the **mapped** value for each item

In pairs, collaborate as you each write the code described in the comment:

1. In your code editor, open and edit the `04-map.js` file
2. In Terminal: `node 04-map.js`

## 05-reduce

In pairs, collaborate as you each write the code described in the comment:

1. In your code editor, open and edit the `05-reduce.js` file
2. In Terminal: `node 05-reduce.js` and type zero or more strings on command line

Will a volunteer say how to write a string which contains spaces on command line.

## 06-rest

The [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) syntax represents an indefinite number of arguments as an array. It looks the same as spread operator.

The [`||`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) conditional and operator returns:
* its first operand if it is truthy
* otherwise its second operand

If both operands are boolean, the result of conditional or operator is `true` if either is `true`.

The string [`repeat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) method returns a new string which consists of the specified number of copies of the string, concatenated together.

1. In your code editor, open the `06-rest.js` file
2. In Terminal: `node 06-rest.js` and type name of any JavaScript type which has `length` property

## 07-closure

Let’s see how to rewrite 3 functions as a function which returns a closure function:

1. In your code editor, open the `07-closure.js` file
2. In Terminal: `node 07-closure.js`

## 08-iife

An [Immediately Invoked Function Expression](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) is a JavaScript function that runs as soon as it is defined.

In browser scripts an IIFE is a way to encapsulate details in a clever way.

ECMAScript 2015 provides modules to achieve the same purpose in a clear and concise way.

1. In your code editor, open the `08-iife.js` file
2. In Terminal: `node 08-iife.js`

Will a volunteer trace the code line by line.

## 09-attributes-to-props

A **props** object in React corresponds to an array of attribute objects in HTML:

* The **key** of the prop is the value of the **name** property in the attribute object.
* The **value** of the prop is the value of the **value** property in the attribute object.

```js
const attributesInHTML = [
  {
    name: 'title',
    value: 'description of element',
  },
];

const propsInReact = {
  title: 'description of element',
};
```

In pairs, collaborate to convert from `forEach` method to `reduce` method:

1. In your code editor, open and edit the `09-attributes-to-props.js` file
2. In Terminal: `node 09-attributes-to-props.js`

## 10-props-to-attributes

In pairs, collaborate to write callback function for `map` method:

1. In your code editor, open and edit the `10-props-to-attributes.js` file
2. In Terminal: `node 10-props-to-attributes.js`

## Homework

Read the chapter about [Sets and Maps](https://leanpub.com/understandinges6/read#leanpub-auto-sets-and-maps) by Nicolas C. Zakas
