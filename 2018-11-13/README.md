# Lesson 13: React, part 2

## update files

Continue to build the application from lesson 12:

1. In `package.json` file of `react-1-2` application project, **replace** the `"server"` property of the `"scripts"` object with the following:

    `"server": "json-server --delay=1000 --port=3001 --watch ./db/db.json"`

2. Copy the `db.json` file in the `db` subdirectory of the `2018-11-13` subdirectory in your clone of the repository, and paste to **replace** the `db.json` file in the `db` subdirectory of the `react-1-2` application project

3. Copy all the files in the `src` subdirectory of the `2018-11-13` subdirectory in your clone of the repository and paste to **replace** any files with same names in the `src` subdirectory of the `react-1-2` application project:

    * but **do not delete** existing files in the `src` subdirectory
    * therefore **do not replace** the `src` subdirectory itself

4. In your code editor, open the `react-1-2` directory

5. In Terminal, change to `react-1-2` directory, and then: `npm run server`

6. In another Terminal, change to `react-1-2` directory, and then: `npm start`

7. In web browser, notice no icons (yet) at left of titles

## learning objectives

1. Compose components to reuse code and separate concerns.

2. Bind event handlers in class and function components.

3. Read and write callback functions to update the state of ancestor components.

## example overview

Continuing with the `react-1-2` application which displays titles of works by an author:

* To be clearer, I renamed opinions as **reactions**.

* To solve problems with `works` endpoint in randomhouse API, I moved all data into `db.json` file.

* You will move SVG shapes from separate components to **children** of `Icon` component.

* Add event handlers to change reaction for title when someone **clicks an icon**.

* Rewrite two `fetch` commands with `Promise.all` to be able to **hide titles** that are not interesting to ever read.

## compose components

> Some components don’t know their children ahead of time.

> We recommend that such components use the special children prop to pass children elements directly into their output.

> This lets other components pass arbitrary children to them by nesting the JSX.

For more information, see [Containment](https://reactjs.org/docs/composition-vs-inheritance.html#containment)

A **function** component depends **only on props**: given props as input, return elements as output.

1. In your code editor, open the `src/Icon.js` file to see the `svg` element

2. Edit the `src/Title.src` file, between start and end tag of `Icon` element:

    * with `which="marked"` prop, copy `polygon` element from `Marked.js` file

    * with `which="reading"` prop, copy `path` elements from `Reading.js` file

    * with `which="liked"` prop, copy `path` element from `Liked.js` file

    * with `which="disliked"` prop, copy `path` element from `Disliked.js` file

3. Save your changes, and then see icons in columns at left of titles

4. Open `Console` pane in browser tab, and then see output when you click icons.

## function bind

Given a function, the [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) method returns a new function that when called:

* has its `this` keyword set to the provided value
* has a sequence of zero or more arguments preceding any provided when the new function is called

In the `src/Icon.js` file, the `svg` element has an `onClick` prop whose value is `onClick` prop of the `Icon` function component:

* which might be `undefined` therefore conditional and `&&` operator
* which needs `workid` and `which` as arguments when it is called

```js
onClick={onClick && onClick.bind(null, workid, which)}
```

In the `src/Titles.js` file, the `Titles` element receives the `onClick` prop.

The arrow function is a placeholder that you will replace later in this lesson.

```js
onClick={isWaiting ? undefined : (arg0, arg1, arg2) => { console.log(arg0, arg1, arg2); }}
```

In the `src/Title.js` file, the `Title` function component received the prop and provides it to each `Icon` element that it renders:

```js
onClick={onClick}
```

## class component

A **class** component depends on props and **its own private state** which changes because of:

* response from server to `fetch` request
* `click` or `change` or `input` or `submit` event from element in application

For example, the `src/App.js` file defines the main `App` component:

```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authordisplay: '',
      reactions: null,
      workidsWaiting: [],
      works: null,
    };
  }

  componentDidMount() {
    // fetch data
  }

  render() {
    // return elements whenever state changes
  }
};
```

## setState

Although you assign the initial state in the constructor, you **never assign** to change the state of a component.

> The `setState` method enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.

> Think of `setState` as a *request* rather than an immediate command to update the component.

You often use object shorthand or object destructuring with `setState` method of a class component.

The first argument is either:

* if change doesn’t depend on previous state: object which is (shallow) merged into the state

    ```js
    this.setState({authordisplay})
    ```

* if change does depend on previous state: updater function: `(statePrev, props) => stateChange`

    ```js
    this.setState(
      ({workidsWaiting}) => ({
        workidsWaiting: [...workidsWaiting, workid], // disable icons in table row
      }),
      // optional callback function
    );
    ```

> The second argument is an optional callback function that will be executed after `setState` is completed and the component is re-rendered. Generally we recommend using `componentDidUpdate` for such logic instead.

## componentDidMount

> Each component has several “lifecycle methods” that you can override to run code at particular times in the process.

> `componentDidMount` is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

Make sure that a component renders correctly before it receives a response to its request for data:

* If you initialize to `[]` then array `map` method “just works” most of the time.
* If you initialize to `null` then conditional and `&&` operator prevents an error.

## class field

Babel configuration in `create-react-app` supports:

* ES2018 object spread operator
* class field proposal for a future version of ECMAScript to bind callback methods via arrow function:

```js
class App extends React.Component {
  // constructor
  // componentDidMount

  changeReaction = (workid, reactionString) => {
    // Callback function when someone clicks icon in table row.
  }

  // render
}
```

A class field looks like a variable declaration without `const` preceding the name.

1. Edit the `src/App.js` file:

    * Paste `changeReaction={this.changeReaction}` prop into `Titles` element in `render` method

2. Edit the `src/Titles.js` file:

    * Add `changeReaction` prop to object destructuring:

        ```js
        const Titles = ({reactions, workidsWaiting, works}) =>
        ```

    * In `onClick` prop of `Title` element replace the placeholder arrow function as follows:

        ```js
        onClick={isWaiting ? undefined : changeReaction}
        ```

3. Save your changes, and then see when you click an icon:

    * The icon and its neighbors have light gray background for 1 second (that is, `--delay 1000` in `"server"` command in `"scripts"` object) because of:

        `<tr className={isWaiting ? 'waiting' : ''}>` in `src/Title.js` file

        and corresponding rule in `src/App.css` file:

        ```css
        tr.waiting td.icon {
          background-color: #cccccc;
        }
        ```

    * The value changes in `"reaction"` property of corresponding object in `"reactions"` array in `db/db.json` file

    * The `fill` and `stroke` props change according to `reaction` and `which` props of `Icon` element

## hidden reaction

You will add as a new feature an x-circle icon to hide titles that are not interesting to ever read.

* markup: another table cell
* style: `fill="none"` and `stroke="#808080"`
* data for state: another value `"reaction": "hidden"`
* code for logic: don’t render table row for hidden work
* code for interaction: same `onClick` as other `Icon` elements

You can work from the top down or from the **bottom up**:

1. Edit the `src/Title.js` file, after the first 4 `td` elements:

    * insert another `td` whose `Icon` element
    * with `which="hidden"` prop
    * and `fill` and `style` props given above
    * has as children the `circle` and 2 `line` elements copied from the `src/x-circle.svg` file

2. Edit the `src/Titles.js` file, replace `<Title` with:

    `reaction !== 'hidden' && <Title`

3. Save your changes, and then see the new x-circle icon, but two style problems:

    * `Title` and `on-sale-date` headings are not aligned
    * author name is not aligned

4. Edit the `src/Titles.js` file to insert another `<th className="icon" />` element

5. Edit the `src/App.css` file to increase padding to how much:

    ```css
    header {
      padding-left: 6rem;
    }
    ```

6. Save your changes, and then see correct alignment

7. Click to hide a title, and see `"reaction": "hidden"` property of corresponding object in `"reactions"` array in `db/db.json` file

## Promise.all

If the application receives `works` before `reactions` then the `App` component could at first display and then remove table rows for any hidden titles.

It’s better to display the table only after it has received both responses.

1. Edit the `src/App.js` file:

    * Move `fetchGetReactions` and `fetchGetWorks` function calls into [`Promise.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
    * Use array destructuring to get results in argument of callback function in shared `then` method
    * Use a shared `.catch` method

2. Save your changes, and then make sure that the application still works correctly

3. If you need to display some hidden titles:

    * Edit the `db/db.json` file, and then save your changes
    * Refresh the browser tab

## homework

1. Read at reactjs.org:
    * [Handling Events](https://reactjs.org/docs/handling-events.html)
    * [setState](https://reactjs.org/docs/react-component.html#setstate)
    * [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)

2. Read [React Components, Elements, and Instances](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html) by Dan Abramov

3. Read [React is JavaScript](https://www.robinwieruch.de/javascript-fundamentals-react-requirements/) by Robin Wieruch
