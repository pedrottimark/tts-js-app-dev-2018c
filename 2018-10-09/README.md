# functions, part 1

## Learn git, part 3

In a Terminal window:

1. change to the `tts-js-app-dev-2018c` directory into which you cloned the repository
2. `git status`
3. `git add --all`
4. `git commit -m "My changes to files in lesson 2"`
5. `git checkout master`
6. `git pull`
7. `git checkout -b 2018-10-09` to make a branch for your changes in lesson 3
8. `cd 2018-10-09` for this lesson

After you finish editing a practice file:

1. `git status` to see which files have uncommitted changes
2. `git add` press space bar, type file name, and then press `enter` or `return`
3. `git commit -m "edited practice file ##"` in which `##` is the file number
4. `git status` to see that you committed changes for a file

## function definition

Functions organize code in “chunks” to limit complexity and increase reusability.

Instead of copying and pasting code, call functions from wherever you need the results.

A function definition consists of any of the following:

* name describes **purpose**
* arguments receive **input**
* body does **work**
* return gives **output**

## arrow function literal

An arrow function literal looks like any of the following:

| arguments | body | return | pattern |
| :--- | :--- | :--- | :--- |
| one | none | implicit | `input => output` |
| two | none | implicit | `(inputA, inputB) => output` |
| zero | block | none | `() => { /* side effect (for example, run a unit test) */ }` |
| one | block | explicit | `input => { /* declarations or statements */ return output; }` |

Because functions are values in JavaScript, you can assign them to variables.

## 01-getFixed3

Here is an arrow function with one argument and implicit return:

```js
// Given coordinate as number,
// return as string with 3 digits after point.
const getFixed3 = coordinate => coordinate.toFixed(3);
```

1. In your code editor, open the `01-getFixed3.js` file
2. In Terminal: `node 01-getFixed3.js`

Will a volunteer trace the code line by line.

## 02-getFixed

Here is an arrow function with two arguments and implicit return:

```js
// Given coordinate and nDigits as numbers,
// return coordinate as string with specific number of digits after point.
const getFixed = (coordinate, nDigits) => coordinate.toFixed(nDigits);
```

1. In your code editor, open the `02-getFixed.js` file
2. In Terminal: `node 02-getFixed.js`

Will three volunteer say expected output if you change second argument of function call:

* `4`
* `2`
* `1`

In pairs, collaborate as you each adapt the file:

1. Comment out variable declaration of `examples` and `for` loop
2. Copy and paste code to output same results with 4 separate function calls.

## 03-if-length

As review of last week, write `if` statement with `else` block.

For several example coordinates, output whichever string is shorter:

* conversion to specific number of digits after the decimal point
* conversion to default number of digits after the decimal point

In pairs, collaborate as you each edit the file:

1. In your code editor, open the `03-if-length.js` file
2. In Terminal: `node 03-if-length.js`

Will four volunteers trace the code for one example coordinate line by line.

## 04-ternary-length

As review of last week, replace `if` statement with ternary expression.

In pairs, collaborate as you each edit the file:

1. In your code editor, open the `04-ternary-length.js` file
2. In Terminal: `node 04-ternary-length.js`

## 05-encapsulate

To “encapsulate” means to hide details: emphasize **what** and de-emphasize **how**.

To limit complexity when you write more code to add new features, move code into functions.

In pairs, collaborate as you each edit the file:

1. In your code editor, open the `05-encapsulate.js` file
2. In Terminal: `node 05-encapsulate.js`

Will a volunteer explain the output before you edit the file.

## 06-closure

A **closure** is a function that accesses data outside its own **scope**:

* outside its **arguments**
* outside any **variables** declared in its body

If a function **returns a function**, when you call the returned function, its body can refer to **arguments** of the outer function.

For example, the body of the inner function refers to `nDigits` of the outer function:

* outer function: `const getFixer = nDigits => /* implicitly return inner function */`
* inner function: `coordinate => { /* body explicitly returns output */ }`

```js
// Given nDigits as number,
// return function which given coordinate as number,
// returns coordinate as string with at most nDigits after decimal point.
const getFixer = nDigits => coordinate => {
  const gotFixed = coordinate.toFixed(nDigits);
  const gotString = coordinate.toString();

  return gotFixed.length < gotString.length ? gotFixed : gotString;
};

const getFixed1 = getFixer(1);

const string = getFixed(0.25);
```

1. In your code editor, open the `06-closure.js` file
2. In Terminal: `node 06-closure.js`

## 07-pluralize

A function definition can provide a **default** value for an argument whose value is `undefined` when the function is called.

```js
// Given number, singular noun stem, and plural suffix,
// return phrase for that number of the noun or nouns.
const pluralize = (number, stem, suffix = 's') =>
  `${number} ${stem}${number === 1 ? '' : suffix}`;
```

Will three volunteers each trace a function call:

```js
const thing1 = pluralize(1, 'thing', 's');
const thing0 = pluralize(0, 'thing');
const thing2 = pluralize(2, 'thing', undefined);
```

1. In your code editor, open the `07-pluralize.js` file
2. In Terminal: `node 07-pluralize.js`

Will a volunteer suggest a noun with irregular plural that this function cannot compute.

## 08-configuration

An idiom to limit complexity when you add new features to functions, is move arguments to a **configuration** object.

```js
const configuration = {
  singular: 'thing',
  suffix: 's',
};
```

Will volunteers each say the properties of a configuration object for nouns:

* sheep
* ox
* inch

Here is a configuration object for a noun with irregular plural:

```js
const configuration = {
  singular: 'goose',
  plural: 'geese',
};
```

Adapt the template literal and ternary expression in the previous file.

In pairs, collaborate as you each edit the file:

1. In your code editor, open the `08-configuration.js` file
2. In Terminal: `node 08-configuration.js`

## 09-closure

Let’s provide a configuration object as an argument of a function that returns a function.

The body of the inner function refers to `noun` of the outer function:

* outer function: `const getPluralizer = noun => /* implicitly return inner function */`
* inner function: `number => { /* body explicitly returns output */ }`

```js
// Given configuration for noun,
// return function which given number,
// returns phrase for that number of the noun.
const getPluralizer = noun => noun.plural
  ? number => `${number} ${number === 1 ? noun.singular : noun.plural}`
  : number => `${number} ${noun.singular}${number === 1 ? '' : noun.suffix}`;

const pluralizeThing = getPluralizer({
  singular: 'thing',
  suffix: 's',
});

const thing1 = pluralizeThing(1);
const thing2 = pluralizeThing(2);
```

1. In your code editor, open the `09-closure.js` file
2. In Terminal: `node 09-closure.js`

Will volunteers each trace the code line by line for:

* thing/things
* sheep
* goose/geese

## 10-JSON

The [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) object has methods to transfer data in JavaScript Object Notation:

* The [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) method converts a JSON string to a JavaScript value. For example, convert data after receiving it as a string from a server.
* The [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) method converts a JavaScript value to a JSON string. For example, convert data before sending it as a string to a server.

Let’s think ahead about configuration objects as responses to requests to a server:

```js
const nounThing = JSON.parse('{"singular":"thing","suffix":"s"}');
const pluralizeThing = getPluralizer(nounThing);
```

And function calls as reaction to inputs in a form:

```js
console.log(pluralizeThing(1));
console.log(pluralizeThing(0));
console.log(pluralizeThing(2));
```

## function expressions

When you read code, you might see non-arrow function expression:

```js
// Given nDigits and coordinate as numbers,
// return as string with 3 digits after point.
const getFixed = function (nDigits, coordinate) {
  return coordinate.toFixed(nDigits);
};
```

## function declaration

When you read code, you might see non-arrow function declaration:

```js
// Given nDigits and coordinate as numbers,
// return as string with 3 digits after point.
function getFixed(nDigits, coordinate) {
  return coordinate.toFixed(nDigits);
};
```

## Homework

* Find data for your project in [List of public JSON APIs](https://github.com/toddmotto/public-apis) by Todd Motto
* Read free chapter of *Understanding ECMAScript 6* by Nicholas C. Zakas: [Functions](https://leanpub.com/understandinges6/read#leanpub-auto-functions)
* Read free chapter of *JavaScript for impatient programmers* by Dr. Axel Rauschmayer: [Assertion API](http://exploringjs.com/impatient-js/ch_assertion-api.html)
