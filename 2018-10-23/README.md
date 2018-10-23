# Lesson 7: JavaScript in browsers

[Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) (DOM) connects JavaScript code in script files to HTML markup in Web pages.

* DOM has a tree structure of **nodes**, including elements, text, and comments.

* Each node corresponds to an **object** which has methods and properties.

* A parent element has an **array** of child nodes, also known as siblings.

* If elements need **interactive** behavior, add callback functions for events.

## 01-button

[`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector) method returns the first element object that matches the selector, or `null` if no elements match.

```js
const p = document.querySelector('p');
```

[`querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll) returns a [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) which is an array-like object:

* it has `length` property
* it has bracket notation to access nodes by index
* it doesn’t have have array methods :(

A `NodeList` does not update if the document changes.

```js
const buttons = document.querySelectorAll('button');
```

An “unobtrusive JavaScript” application adds event listeners to elements so people can **interact** with the page.

Here is an idiom with function [`call`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) method of `forEach` array method because `buttons` in array-like object instead of array:

```js
Array.prototype.forEach.call(buttons, button => {
  button.addEventListener('click', onClick);
});
```

1. In Explorer or Finder, double-click the `01-button.html` file to open it in a browser:

    * Open the Elements pane and expand `body` to see color of paragraph change when you click a button

    * Open the Console pane and see element (in Firefox, you can click to expand it)

2. In your code editor, open the `01-button.html` file:

    * Find the 3 classes in the `style` element

    * Find the 3 values of `button` elements

3. In your code editor, open the `01-button.js` file::

    * Add `//` comment at beginning of line after `TODO` comment

    * Delete `//` comment at beginning of the second line after `TODO` comment

4. Refresh browser tab, and then click buttons to see that `class` attribute and `className` property are equivalent

[`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) method of an element has arguments:

* event name like [`click`](https://developer.mozilla.org/en-US/docs/Web/Events/click) when the pointing device button is pressed and released
* function to be called whenever the specified event is delivered to the target

[`event`](https://developer.mozilla.org/en-US/docs/Web/API/Event) object (which is argument of callback function) has properties like [`target`](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) which refers to the object that dispatched the event

An element has **attributes** and **properties**.

* [`setAttribute`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) method sets the value of an attribute like `class`
* [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) property gets and sets the value of the `class` attribute

Will a volunteer trace in the code which lines are executed in order to add the event listener, and then call it when an event occurs.

## 02-input-text

[`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element is an interactive control for web-based forms:

* [`type="text"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text) attribute is for generic single-line text
* `name` attribute identifies the `value` property in `input` or `change` events, or when the form is submitted
* [`input`](https://developer.mozilla.org/en-US/docs/Web/Events/input) occurs when text of an `input` element changes

```html
<input type="text" name="whatever"/>
```

```js
const onInput = event => {
  const target = event.target;
  console.info(`onInput name=${target.name} value=${target.value}`);
};

const input = document.querySelector('input');
input.addEventListener('input', onInput);
```

1. In your code editor, open the `02-input-text.html` file:

    * Find the name of the `input` element

2. In Explorer or Finder, double-click the `02-input-text.html` file to open it in a browser:

    * Open the Console pane, and then type in the input area of the web page

3. In your code editor, open the `02-input-text.js` file:

    * Edit after `TODO` comment to declare name and value as variables with object destructuring

    * Save your changes, refresh the browser tab, and then type in the input area to verify that y’all refactored the code successfully

## 03-select

[`select`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) element displays a drop-down list of options

```html
<select name="productId">
<option value="4134">apples, Gala, large</option>
<option value="4018">apples, Granny Smith, large</option>
<option value="4011">bananas, yellow</option>
<!-- and so on -->
</select>
```

[`change`](https://developer.mozilla.org/en-US/docs/Web/Events/change) event occurs when value of `select` element changes

1. In Explorer or Finder, double-click the `03-select.html` file to open it in a browser:

    * Open the Console pane

    * Select an option in the web page and see no information in Console pane

2. In your code editor, open the `03-select.html` file:

    * Find the name of the `select` element and the values of the `option` elements

3. In your code editor, open the `03-select.js` file:

    * Edit at `TODO 4` and `TODO 5` comments according to preceding examples

    * Save your changes, refresh the browser tab, and then select an option in the web page and see information in Console pane

    * Edit callback function at `TODO 1` comment, after you have looked at the `products` array in the `00-products.js` file

    * At `TODO 2` comment, delete `//` comment preceding `const description = findProduct(value).description;`

    * At `TODO 3` comment, cut `description=${description}` following `//` comment and paste at end of template literal

    * Save your changes, refresh the browser tab, and then select an option in the web page and see description information in Console pane

Will a volunteer explain how you would create the `option` elements with JavaScript code from the `products` array in the `00-products.js` file.

## 04-input-radio

Groups of `input` elements with [`type="radio"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) attribute describe a set of options which are related by their `name` attribute. Only one radio button in a given group can be selected at the same time.

[`change`](https://developer.mozilla.org/en-US/docs/Web/Events/change) event occurs when value of radio button group changes (that is, when a particular radio button is selected)

[`fieldset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset) displays descendant elements as a visual group.

[`label`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) displays a caption.

```html
<fieldset>
<label>Decisions by the referees on the football field should be:</label>
<label><input type="radio" name="decisions" value="const"/>const</label>
<label><input type="radio" name="decisions" value="var"/>VAR</label>
<label><input type="radio" name="decisions" value="let"/>let play continue</label>
</fieldset>
```

1. In your code editor, open the `04-input-radio.html` file

2. In your code editor, open the `04-input-radio.js` file:

    * Edit at `TODO` comments (adapt code from 03, 02, and 01 `.js` files :)

    * Save your changes

3. In Explorer or Finder, double-click the `04-input-radio.html` file to open it in a browser:

    * Open the Console pane

    * Click to select options in the web page and see information in Console pane

Will a volunteer trace in the code which lines are executed in order to add the event listener, and then call it when an event occurs.

## 05-input-checkbox

Each `input` element with [`type="checkbox"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) attribute has a boolean `checked` property.

Unlike a group of radio buttons which have the same value of their `name` attributes, each check box has a unique name.

[`change`](https://developer.mozilla.org/en-US/docs/Web/Events/change) event occurs when value of check box changes.

```html
<label><input type="checkbox" name="local"/>locally grown</label>
<label><input type="checkbox" name="organic"/>organic</label>
```

1. In Explorer or Finder, double-click the `05-input-checkbox.html` file to open it in a browser:

    * Open the Console pane

    * Click to select check boxes in the web page and see no information in Console pane

2. In your code editor, open the `05-input-checkbox.html` file:

    * Find values of `name` attribute of `input` elements

3. In your code editor, open the `05-input-checkbox.js` file:

    * Edit at `TODO` comments (adapt code from 04, 03, 02, and 01 `.js` files :)

    * Save your changes

    * Refresh the browser tab

    * Click check boxes in the web page and see information in Console pane

## 06-form

[`form`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) contains interactive controls for submitting information to a web server

[`button`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) element is presented in a style similar to that of the host platform the user agent is running on, but you can change the appearance of the button using CSS.

* `type="submit"` causes [`submit`](https://developer.mozilla.org/en-US/docs/Web/Events/submit) event for the **form** which contains the button

* `type="reset"` causes [`reset`](https://developer.mozilla.org/en-US/docs/Web/Events/submit) event for the **form** which contains the button

* `type="button"` or no type specified is for client-side script to attach event listener to `click` event

```html
<form name="produce">
<!-- interactive controls -->
<button type="submit">Submit</button>
<button type="reset">Reset</button>
</form>
```

A form has [`elements`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements) property which is collection of its input controls. You can access an element by its index, or much better, by value of its `name` or `id` attribute.

Each person individually:

1. In Explorer or Finder, double-click the `06-form.html` file to open it in a browser:

    * Open the Console pane

    * Make some selections, and then click `Submit`

    * Will a volunteer say what data format appears in the Console pane

    * Make some selections, and then click `Reset`

2. In your code editor, open the `06-form.html` file:

    * Find the name of the `form` element
    * Find the names of input controls

3. In your code editor, open the `06-form.js` file

    * Let’s walk through the code together function by function

## 07-createElement

The `createElement` function inspired by React has arguments:

* `type` is an element name as string like `'input'`

* `props` is an object which consists of attribute names and values:

    ```js
    {
      type: 'text',
      name: 'quantity',
      onInput: event => {
        // do something with event.target.value
      }
    }
    ```

    If the callback function is for `input` event, then its key is `onInput`, and so on

* `...children` rest parameters is an array which contains the rest of the arguments (if any) when the function is called

    For a text node, the child is a string like `'Description'`

    If the child is an element, then you can call `createElement(…)` within a call to `createElement`

In this example, you will append a `tr` element to the `tbody` element of the `table` for each purchase.

```html
<table>
<thead>
<tr>
<th scope="col">Quantity</th>
<th scope="col">Description</th>
<th scope="col">PLU code</th>
<th scope="col">local</th>
<th scope="col">organic</th>
</tr>
</thead>
<tbody></tbody>
</table>
```

1. In Explorer or Finder, double-click the `07-form.html` file to open it in a browser:

    * Open the Elements pane and expand to see the `tbody` element

2. In your code editor, open the `07-form.html` file:

    * Find values of `table` element

3. In your code editor, open the `07-form.js` file:

    * Edit at `TODO 1` comment to find and assign the `tbody` element

    * Edit at `TODO 2` comment to create `td` and `tr` elements from properties of `state` argument

    * Edit at `TODO 3` comment to delete all child rows from tbody element (see idiom in `onChangeCategory` function)

    * Save your changes

    * Refresh the browser tab

    * When you make a purchase using the form, see it appear in the web page and in the Elements pane

## Homework

1. Read 3 free chapters in  *JavaScript for impatient programmers* by Dr. Axel Rauschmayer: `http://exploringjs.com/impatient-js/`

    * [Booleans](http://exploringjs.com/impatient-js/ch_booleans.html)
    * [Single objects](http://exploringjs.com/impatient-js/ch_single-objects.html)
    * [Prototype chains and classes](http://exploringjs.com/impatient-js/ch_proto-chains-classes.html)

2. Search for data related to your project.

    For example, I searched for information about PLU codes:

    * [French-English](https://www.ifpsglobal.com/Portals/22/IFPS%20Documents/Multi-Linqual%20Translations/December%202016%20PLU%20Codes%20French%20Translation.pdf?ver=2016-12-21-212351-940)
    * [English-Spanish](https://www.ifpsglobal.com/Portals/22/IFPS%20Documents/Multi-Linqual%20Translations/June%202016%20PLU%20Codes%20Spanish%20Translation.pdf?ver=2016-06-28-195835-817)

3. Adapt `06-form.html` or `07-form.html` and associated files for first draft of your project.
