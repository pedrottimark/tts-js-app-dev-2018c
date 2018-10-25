# Lesson 8: JavaScript tools, part 1

Example theme for this lesson: test that your code works correctly with **assertions**

## CommonJS modules

To limit complexity and reuse code, you can divide software into **modules**:

* browser script file: variables are **global** by default, so dependencies are **implicit**
* Node.js module file: variables are **local** by default, so dependencies are **explicit**

## 01-require-built-in

To explicitly use code from another module, call the global `require` function.

The [`assert`](https://nodejs.org/dist/latest-v8.x/docs/api/assert.html) module provides a simple set of assertion tests that can be used to test invariants.

The [`deepStrictEqual`](https://nodejs.org/dist/latest-v8.x/docs/api/assert.html#assert_assert_deepstrictequal_actual_expected_message) method:

* compares a **received** value to an **expected** value item-by-item and property-by-property (instead of referential identity)
* if values are not equal, it throws an `AssertionError` with the message

```js
const assert = require('assert');

// assert.deepStrictEqual(received, expected, message);
assert.deepStrictEqual(0 % 2, 0, 'remainder of zero');
assert.deepStrictEqual(1 % 2, 1, 'remainder of positive odd number');
assert.deepStrictEqual(2 % 2, 0, 'remainder of positive even number');
assert.deepStrictEqual(-1 % 2, 1, 'remainder of negative odd number');
assert.deepStrictEqual(-2 % 2, 0, 'remainder of negative even number');
```

1. In Terminal: `node 01-require-built-in.js`

2. In your code editor, open the `01-require-built-in.js` file:

    * Will a volunteer say which assertion failed
    * Will another volunteer suggest a change to the expected value  so it will pass
    * Edit your file to make the change

3. In Terminal: `node 01-require-built-in.js`

## 02-require-from-project

To explicitly use code from another module **in the same project**, call the `require` function with a **path** that begins with:

* `./` for file in **same** folder or subfolder
* `../` for file in **parent** folder or sibling subfolder
* `/` for file at absolute path from **root** folder

You need to separate the code to be tested from the test code:

```js
const assert = require('assert');

const remainder2 = require('./02-default-export.js'); // function to be tested

assert.deepStrictEqual(remainder2(0), 0, 'remainder of zero');
assert.deepStrictEqual(remainder2(1), 1, 'remainder of positive odd number');
assert.deepStrictEqual(remainder2(2), 0, 'remainder of positive even number');
assert.deepStrictEqual(remainder2(-1), -1, 'remainder of negative odd number');
assert.deepStrictEqual(remainder2(-2), 0, 'remainder of negative even number');
```

## 02-default-export

To explicitly provide **one function** from a module to be used by other modules, assign to replace the default value of global `module.exports` property:

```js
module.exports = value => value % 2;
```

1. In Terminal: `node 02-require-from-project.js`

2. In your code editor, open the `02-require-from-project.js` file

3. In your code editor, open the `02-default-export.js` file

Will a volunteer trace the code line by line.

## 03-named-exports

Because the default value of global `module.exports` property is an empty object, you can add new properties to explicitly provide **multiple named exports** from a module to be used from other modules:

```js
module.exports.remainder2 = value => value % 2;
module.exports.remainder3 = value => value % 3;
module.exports.remainder5 = value => value % 5;
```

## 03-require-from-project

Write **object destructuring** assignment to use named exports from a module:

```js
const assert = require('assert');

const {remainder2, remainder3} = require('./03-named-exports.js');

const received = 7;
assert.deepStrictEqual(remainder2(received), 1, 'expected remainder for divisor 2');
assert.deepStrictEqual(remainder3(received), 1, 'expected remainder for divisor 3');
```

1. In Terminal: `node 03-require-from-project.js`

2. In your code editor, open the `03-require-from-project.js` file

3. In your code editor, open the `03-named-exports.js` file

Will a volunteer trace the code line by line.

## npm

[npm](https://www.npmjs.com/) is the package manager for JavaScript and the world’s largest software registry.

> Discover packages of reusable code — and assemble them in powerful new ways.

For this lesson we will install two packages from npm:

* [pretty-format](https://www.npmjs.com/package/pretty-format) stringifies any JavaScript value
* [chalk](https://www.npmjs.com/package/chalk) provides style for strings in Terminal or Command Prompt

## package.json

A `package.json` file contains the names and versions of installed dependencies.

```json
{
  "name": "lesson-8-javascript-tools-1",
  "version": "1.0.0",
  "private": true,
  "description": "Lesson 8: JavaScript tools, part 1",
  "license": "MIT",
  "dependencies": {
  }
}
```

In your code editor, open the `package.json` file

## npm or yarn

* [npm](https://docs.npmjs.com/cli/npm) is also the name of a command-line tool to install packages
* [yarn](https://yarnpkg.com/en/docs/cli/) is the name of an alternative command-line tool to install packages

If Node.js is installed on your computer, then `npm` is installed.

Will a volunteer say how to see if `yarn` is installed on your computer.

## install pretty-format

To install `pretty-format` package as a dependency:

* `npm install --save-exact pretty-format`
* `yarn add --exact pretty-format`

In your code editor, see what changed in the `package.json` file

## package version

The version string consists of three numbers:

1. major: can also make “breaking” changes to existing features
2. minor: can also add new features
3. patch: can only fix errors in existing features

Examples of version strings in `package.json` file:

* To require an exact version: `"23.6.0"`
* To allow minor updates: `"^23.6.0"` allows `23.7.0` but not `24.0.0`
* To allow patch updates: `"~23.6.0"` allows `23.6.1` but not `23.7.0`

## 04-require-from-project

1. In Terminal: `node 04-require-from-project.js`

2. In your code editor, open the `04-require-from-project.js` file

3. In your code editor, open the `04-deep-strict-equal.js` file

4. In your code editor, open the `03-named-exports.js` file

Will a volunteer trace the code line by line.

## 04-deep-strict-equal

If the `assert` method throws an error:

* it does displays a descriptive message
* it doesn’t display the received nor expected values
* it prevents the rest of the assertions from being tested

Let’s write a `test` function:

* that displays all three arguments if an assertion fails
* that allows the rest of the assertions to be tested

```js
const assert = require('assert'); // built-in module
const format = require('pretty-format'); // installed package

module.exports = (received, expected, message) => {
  try {
    // call assert.deepStrictEqual
  } catch (error) {
    process.stdout.write(`Message:  ${error.message}\n`);
    // output Expected: and format expected value
    // output Received: and format received value
  }
};
```

1. Edit the `04-deep-strict-equal.js` file to do what the comments request

2. In Terminal: `node 04-require-from-project.js`

Will a volunteer trace the code line by line.

When a test fails:

* Is the code incorrect?
* Is the test incorrect?
* Or both?

Will a volunteer say what seems to be incorrect?

## install chalk

To install `chalk` package as a dependency:

* `npm install --save-exact chalk`
* `yarn add --exact chalk`

In your code editor, see what changed in the `package.json` file

Let’s apply visual principles to the report when assertions fail:

* alignment of labels and values as two columns
* proximity of three lines per assertion separated by an empty line
* contrast of expected in **green** and received in **red**

Will a volunteer say what information from web page for [chalk](https://www.npmjs.com/package/chalk) package we need to know for **contrast**.

## 05-deep-strict-equal

1. In Terminal: `node 05-require-from-project.js`

2. Edit the `05-deep-strict-equal.js` file to do what the comments request

3. In Terminal: `node 05-require-from-project.js`

## 06-array-methods

To see the benefit of deep equality, let’s write functions that return objects or arrays.

1. In Terminal: `node 06-tests.js`

2. In your code editor, open files:

    * `00-products.js`
    * `06-tests.js`
    * `06-array-methods.js`

3. Edit the `06-array-methods.js` file:

    * comment out `module.exports.findById = (array, id) => undefined;`
    * comment in preceding line and replace `TODO` comment with code

4. In Terminal: `node 06-tests.js`

5. Edit the `06-array-methods.js` file:

    * comment out `module.exports.filterByCategory = (array, category) => [];`
    * comment in preceding line and replace `TODO` comment with code

6. In Terminal: `node 06-tests.js`

## ECMAScript modules

ECMAScript 2015 provides a standard module system.

To use [ECMAScript modules](https://nodejs.org/api/esm.html) in Node.js:

* include `--experimental-modules --no-warnings` options on command line
* use `.mjs` as file name extension

```sh
node --experimental-modules --no-warnings 07-tests.mjs
```

1. Open the `07-deep-strict-equality.mjs` file and see the following:

    ```js
    // const assert = require('assert');
    import assert from 'assert';  // built-in module
    ```

    ```js
    // const format = require('pretty-format');
    import format from 'pretty-format'; // installed package
    ```

2. Edit the file at the `TODO` comment to import chalk

3. See:

    ```js
    // module.exports = (received, expected, message) => {
    export default (received, expected, message) => {
      // body of function
    };
    ```

4. Open the `07-products.mjs` file and edit to convert its default export:

    * from CommonJS
    * to ECMAScript

5. Open the `07-array-methods.mjs` file and see:

    ```js
    // module.exports.findById = (array, id) => array.find(
    export const findById = (array, id) => array.find(
      object => object.id === id
    );
    ```

6. Edit the file at the TODO comment to rewrite as named export from ECMAScript module

7. Open the `07-tests.mjs` file and edit at `TODO` comments:

    * `TODO 1` comment: rewrite as default import
    * `TODO 2` comment: rewrite as default import
    * `TODO 3` comment: rewrite as named imports

8. In Terminal: `node --experimental-modules --no-warnings 07-tests.mjs`

9. When you have finished, remove `node_modules` folder: `rm -rf node_modules`

If you need to reinstall dependencies for a project according to `package.json` file:

* `npm install`
* `yarn`

## Homework

Read free chapter [Encapsulating Code with Modules](https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules) by Nicholas C. Zakas
