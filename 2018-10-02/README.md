# Lesson 1: variables and statements

## Learn git, part 1

1. Decide on the **parent** directory in which to create a child directory which will be your local copy of the class repository

2. In a Command Prompt or Terminal window, use `cd` command to change to the **parent** directory

3. In a **browser** window, open `https://github.com/pedrottimark/tts-js-app-dev-2018c`

4. Click the green `Clone or download` button at the right, and then **copy** the text

5. To **clone** the repository, on command line:

    * type `git clone` and then press space bar
    * paste the text that you copied and then press `enter` or `return` key

6. To change to the **child** directory which contains the cloned repository: `cd tts-js-app-dev-2018c`

7. Open the `tts-js-app-dev-2018c` directory in your **code editor**.

    If no code editor is installed on your computer, I recommend Visual Studio Code at `https://code.visualstudio.com`

8. To make a **branch** for your changes: `git checkout -b 2018-10-02`

9. To change to the **subdirectory** which contains files for this lesson: `cd 2018-10-02`

## Learn Node.js, part 1

[Node.js](https://nodejs.org/en/) is a JavaScript runtime built on V8 JavaScript engine in Chrome browser.

In other words, you can run JavaScript programs on a command line instead of in a browser.

A general way to see if software is installed on your computer is run command with `--version` option:

```sh
node --version
```

If `node` is not installed on your computer, I recommend that you install it with Node Version Manager at `https://github.com/creationix/nvm`

## Overview

A web page consists of four main parts:

* content: text and media, including SVG markup for vector illustrations
* structure: HTML markup
* visual design: CSS style for layout, typography, color
* interactive behavior: JavaScript code

The main goal of this course is for you to provide interactive behavior for web applications.

## JavaScript and ECMAScript

**Java**Script is the **actual** language in specific versions of Node.js or browsers.

**ECMA**Script is the **ideal** language that is published as a standard.

ECMAScript 2015 is also known as ES2015 or ES6. To make it clear, write the year :)

| year | math trick | version |
| :--- | :--- | :--- |
| 2009 | | 5 |
| 2015 | 2015 - 2009 | 6 |
| 2016 | 2016 - 2009 | 7 |

## const and let

Instead of `var` declaration, we will learn `const` and `let` declarations in ES2015.

A `const` declaration is for variables whose values:

* **cannot** change: `const FREEZING_F = 32;`
* **don’t** change: `const temperatureF = FREEZING_F + temperatureC * 1.8;`

A `let` declaration is for variables whose values **will** change:

* initialized: `let i = 0;` especially in a `for` loop
* uninitialized: `let i;` value is `undefined` until it is assigned

The most common convention in JavaScript for variable names is known as **camel** case.

## typeof

The `typeof` prefix operator returns the type of an expression as a string:

* `'string'` type is enclosed in single or double quotes
* `'number'` type includes integer and float values
* `'boolean'` type has explicit values `false` and `true`
* `'undefined'` type is for uninitialized variables or omitted arguments
* `'symbol'` type was added in ES2015 (not in this course)
* `'function'` type is a specialized object which can be called (lessons 3, 4, 5)
* `'object'` type includes array, date, error, and regular expression (lesson 2)

## 01-string

A string value consists of text.

1. In your code editor, open the `01-string.js` file
2. In Terminal: `node 01-string.js`
3. In your code editor, open the `01-string.html` file
4. In Explorer or Finder, double-click the `01-string.html` file to open it in a browser
5. Right-click in the browser, click `Inspect` to open developer tools pane, and then click `Console` tab

Will three volunteer each do one of the following:

* Identify which elements in `01-string.html` file correspond to things that are visible on web page
* Explain what `/>` means in tag of `input` element
* Identify which statements in `01-string.js` file correspond to output in Console pane

## 02-number

A number value in JavaScript is either an integer or a decimal (also known as floating point).

1. In your code editor, open the `02-number.js` file
2. In Terminal: `node 02-number.js`
3. In your code editor, open the `02-number.html` file
4. In Explorer or Finder, double-click the `02-number.html` file to open it in a browser
5. Right-click in the browser, click `Inspect` to open developer tools pane, and then click `Console` tab

Will three volunteer each do one of the following:

* Identify which parts in `02-number.html` file differ from `01-string.html` file and where you see the difference in web browser
* Suggest some inputs to test how `<input type="number"/>` behaves differently than `<input type="text"/>`
* Say what you expected (different from what JavaScript does) for any outputs

## 03-boolean

A boolean value in JavaScript is either `true` or `false`.

1. In your code editor, open the `03-boolean.js` file
2. In Terminal: `node 03-boolean.js`
3. In your code editor, open the `03-boolean.html` file
4. In Explorer or Finder, double-click the `03-boolean.html` file to open it in a browser
5. Right-click in the browser, click `Inspect` to open developer tools pane, and then click `Console` tab

Will three volunteers each do one of the following:

* Explain the last pair of `console.log` statements in the `03-boolean.js` file
* Say what attribute to add to `input` element so check box is selected when you refresh browser tab
* Explain the purpose of each element contained in the `head` element of these `.html` files

## 04-prompt

The [`prompt`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) function is a way to receive input in a web browser.

Starting in lesson 3, you will learn how to write your own functions.

In lesson 7, you will learn better ways to receive input and display output :)

1. In your code editor, open the `04-prompt.js` file
2. In your code editor, open the `04-prompt.html` file
3. In Explorer or Finder, double-click the `04-prompt.html` file to open it in a browser
4. Type a number in the dialog box, and then click `OK`
5. Right-click in the browser, click `Inspect` to open developer tools pane, and then click `Console` tab

Will three volunteers each do one of the following:

* Come to the front and trace the code line by line.
* Say how we can cause the web page to let us input another value.
* Suggest another input value.

## 05-prompt-practice

In pairs, collaborate as you each adapt the previous files:

* receive as input the temperature in **Fahrenheit**
* display as output the temperature in **Celcius**

If necessary, search online to find the formula that you need :)

1. In your code editor, make a new `05-prompt-practice.js` file
2. In your code editor, make a new `05-prompt-practice.html` file
3. In Explorer or Finder, double-click the `05-prompt-practice.html` file to open it in a browser
4. Type a number in the dialog box, and then click `OK`
5. Right-click in the browser, click `Inspect` to open developer tools pane, and then click `Console` tab

## 06-string-concatenation

The `+` operator for number operands means addition.

The `+` operator for string operands means concatenation.

Will a volunteer explain string concatenation.

1. In your code editor, open the `06-string-concatenation.js` file
2. In your code editor, open the `06-string-concatenation.html` file
3. In Explorer or Finder, double-click the `06-string-concatenation.html` file to open it in a browser
4. Type a number in the dialog box, and then click `OK`
5. Right-click in the browser, click `Inspect` to open developer tools pane, and then click `Console` tab

Will a volunteer come to the front and trace the code line by line.

A typo in string concatenation can mess things up!

In `Console` tab of browser, paste the following: `'b' + 'a' + +'a' + 'a'`

Will a volunteer explain the result.

## 07-template-literal

ECMAScript 2015 provides template literals as a clearer alternative to string concatenation.

Instead of single or double quotes, enclose the string in backtick quotes (at upper left of keyboard).

If you enclose an expression in `${}` it is converted to string and inserted.

1. In your code editor, open the `07-template-literal.js` file
2. In your code editor, open the `07-template-literal.html` file
3. In Explorer or Finder, double-click the `07-template-literal.html` file to open it in a browser
4. Type a number in the dialog box, and then click `OK`
5. Right-click in the browser, click `Inspect` to open developer tools pane, and then click `Console` tab

## 08-toFixed

The [`toFixed`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) method formats a number using fixed-point notation.

In lesson 6, you will learn how to write your own methods.

1. In your code editor, open the `08-toFixed.js` file
2. In your code editor, open the `08-toFixed.html` file
3. In Explorer or Finder, double-click the `08-toFixed.html` file to open it in a browser
4. Type a number in the dialog box, and then click `OK`
5. Right-click in the browser, click `Inspect` to open developer tools pane, and then click `Console` tab

## 09-slice-parseInt

The [`slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) method of a string returns a substring, without modifying the original string.

The [`parseInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) function converts a string to an integer number of the specified radix (the base in mathematical numeral systems).

1. In your code editor, open the `09-slice-parseInt.js` file
2. In Terminal: `node 09-slice-parseInt.js`
3. In your code editor, open the `09-slice-parseInt.html` file
4. In Explorer or Finder, double-click the `09-slice-parseInt.html` file to open it in a browser

Will three volunteers each do one of the following:

* Explain the three examples of `slice` method in the `09-slice-parseInt.js` file
* Explain the three examples of `parseInt` function in the `09-slice-parseInt.js` file
* Explain the `style` rules and `class` attributes in the `09-slice-parseInt.html` file

## 10-comparisons

Instead of `==` or `!=` loose equality operators, we recommend `===` and `!==` strict equality operators.

1. In your code editor, open the `10-comparisons.js` file
2. In Terminal: `node 10-comparisons.js`

## 11-for

A [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) statement executes a block statement zero or more times according to an initialization, condition, and increment.

For example, a `for` loop can compute the sum of integers up to and including an input value.

The `+=` operator adds to and then reassigns a variable: `i += 1` is a concise way to write `i = i + 1`

1. In your code editor, open the `11-for.js` file
2. In Explorer or Finder, double-click the `11-for.html` file to open it in a browser
3. Type a positive integer number in the dialog box, and then click `OK`
4. Right-click in the browser, click `Inspect` to open developer tools pane, and then click `Console` tab

Will a volunteer come to the front and trace the code line by line.

## 12-for-practice

Adapt the preceding `for` loop to compute the sum of **squares** of integers up to and including an input value.

In pairs, edit your copy of the JavaScript file as practice.

Someone take role of **navigator** to suggest what to do and why to do it.

Someone else take role of **pilot** to edit the file, and then test it in a browser.

1. In your code editor, open the `12-for-practice.js` file and **navigator** suggest what to insert at `// TODO assignment statement` comment
2. In Explorer or Finder, double-click the `12-for-practice.html` file to open it in a browser
3. Type a positive integer number in the dialog box, and then click `OK`
4. Right-click in the browser, click `Inspect` to open developer tools pane, and then click `Console` tab

Will three volunteers each suggest an input value so all pairs can test their `for` loop.

## 13-while

A [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) statement executes a block statement zero or more times according to generic comparison expression.

1. In your code editor, open the `13-while.js` file
2. In Explorer or Finder, double-click the `13-while.html` file to open it in a browser
3. Type a positive integer number in the dialog box, and then click `OK`
4. Right-click in the browser, click `Inspect` to open developer tools pane, and then click `Console` tab

Will a volunteer come to the front and trace the code line by line.

## 14-while-practice

Change roles for practice to replace `for` statement with `while` statement:

1. In your code editor, open the `14-while-practice.js` file
2. In Terminal: `node 14-while-practice.js`
3. **Navigator** suggest changes to replace the `for` statement with a `while` statement
4. In Terminal: `node 14-while-practice.js`

## 15-if

An [`if`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement executes:

* a statement block if the condition is **truthy**
* an optional `else` statement block if the condition is **falsey**

We will see the falsey values in the `20-falsey.js` file.

It an argument of the [`slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) method is negative, it means from **end** of the string.

The [`parseFloat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) function converts a string to a number.

1. In your code editor, open the `15-if.js` file
2. In Explorer or Finder, double-click the `15-if.html` file to open it in a browser
3. Type a positive integer number in the dialog box, and then click `OK`
4. Right-click in the browser, click `Inspect` to open developer tools pane, and then click `Console` tab

## 16-if-practice

Change roles for practice to replace `for` statement with `while` statement:

1. In your code editor, open the `16-if-practice.js` file
2. In Explorer or Finder, double-click the `16-if-practice.html` file to open it in a browser
3. Type a length with `ft` or `in` as unit in the dialog box, and then click `OK`
4. Right-click in the browser, click `Inspect` to open developer tools pane, and then click `Console` tab
5. **Navigator** suggest changes to replace the `'TODO'` string with an arithmetic expression
6. **Pilot** refresh the browser tab, type a length with `ft` or `in` again, and then click `OK`

Will three volunteers each suggest an input value so all pairs can test their `if` statement.

## 17-ternary

A [ternary](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) expression is an alternative to an `if` statement:

* the first operand is the condition
* the operand after `?` is the value if the condition is **truthy**
* the operand after `:` is the value if the condition is **falsey**

Will a volunteer come to the front and trace the code line by line.

## 18-ternary-practice

Change roles for practice to write expressions for values of ternary expression.

If necessary, search online to find the relationship between **cm**, **mm**, and **m** units :)

1. In your code editor, open the `18-ternary-practice.js` file
2. In Explorer or Finder, double-click the `18-ternary-practice.html` file to open it in a browser
3. Type a length with `cm` or `mm` as unit in the dialog box, and then click `OK`
4. Right-click in the browser, click `Inspect` to open developer tools pane, and then click `Console` tab
5. **Navigator** suggest changes to replace the three `TODO` placeholders
6. **Pilot** refresh the browser tab, type a length with `cm` or `mm` again, and then click `OK`

Will three volunteers each suggest an input value so all pairs can test their `if` statement.

## 19-switch

A [`switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) statement evaluates an expression, and then executes the statements following the first `case` clause that matches; otherwise the statements following the `default` clause.

This example uses two `switch` statements: to convert from any temperature unit to Celsius, and then from Celsius to any temperature unit.

1. In your code editor, open the `19-switch.js` file
2. In Explorer or Finder, double-click the `19-switch.html` file to open it in a browser
3. Type a temperature with unit `C`, `K`, or `F` in the first dialog box, and then click `OK`
4. Type a unit `C`, `K`, or `F` in the second dialog box, and then click `OK`
5. Right-click in the browser, click `Inspect` to open developer tools pane, and then click `Console` tab

Will three volunteers each do one of the following:

* Come to the front and trace the first `switch` statement
* Come to the front and trace the second `switch` statement
* Come to the front and trace the template literals

## 20-falsey

1. In your code editor, open the `20-falsey.js` file
2. In Terminal: `node 20-falsey.js`

## Homework

1. Only if you are already on Twitter, follow `@JavaScriptDaily`
2. Read [JavaScript typeof](https://blog.logrocket.com/javascript-typeof-2511d53a1a62) by Glad Chinda
3. Read free chapter of *Understanding ECMAScript 6* by Nicholas C. Zakas: [Strings and Regular Expressions](https://leanpub.com/understandinges6/read#leanpub-auto-strings-and-regular-expressions)
4. Browse free preview of *JavaScript for impatient programmers* by Dr. Axel Rauschmayer: `http://exploringjs.com/impatient-js/`
5. Browse conversions between number and string Mozilla Developer Network: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number`
