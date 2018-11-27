# Lesson 16: Redux, part 1

## create-react-app

1. Change to a directory which will be the parent of a new application directory

2. Create the new application directory:

    * if `create-react-app` is installed on your computer: `create-react-app redux-1`
    * otherwise: `npx create-react-app redux-1`

3. Change to the new application directory: `cd redux-1`

4. To install dependencies, do one of the following:

    * If `yarn` is installed on your computer:

        ```sh
        yarn add --exact react-redux redux
        yarn add --exact --dev redux-logger
        ```

    * Otherwise:

        ```sh
        npm install --save-exact react-redux redux
        npm install --save-exact --save-dev redux-logger
        ```

5. Copy files **from** your clone of the class repository **to** the new application:

    * In the first Explorer or Finder window, copy the `src` subdirectory in the `2018-11-20` subdirectory in your clone of the class repository

    * In the second Explorer or Finder window, paste to **replace** the `src` subdirectory in the new `redux-1` directory

6. Open the `redux-1` directory in your code editor

7. In Terminal, start the **development server**:

    * If `yarn` is installed on your computer: `yarn start`
    * Otherwise: `npm start`

8. After the application starts in a new tab of Chrome browser, to see **“hot reloading”** of changes:

    * Replace `React App` with `Redux 1` in the `index.html` file in `public` subdirectory of the application
    * Delete the HTML comments
    * Save your changes

## example overview

Given `Increment` and `Decrement` buttons to increase or decrease `val` in the numerator and a `select` element to set the `max` in the denominator, display the ratio in three bar graphs.

Convert from component state to Redux store so intermediate components don’t need to know about the counter.

## learning objectives

1. Read and write action creator functions.

2. Read and write cases of `switch` statement in reducer functions.

3. Read test for reducer function.

4. Map action creator functions or state to props in “connected” components.

## Redux concepts

[Redux](https://redux.js.org/introduction/motivation) attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen. These restrictions are reflected in the [three principles](https://redux.js.org/introduction/threeprinciples) of Redux:

* The state of your whole application is stored in an object tree within a single **store**.

* The only way to change the state is to emit an **action**, an object describing what happened.

* To specify how the state tree is transformed by actions, you write pure **reducers**.

Let’s look at the diagrams in article [When do I know I’m ready for Redux?](https://medium.com/dailyjs/when-do-i-know-im-ready-for-redux-f34da253c85f)

Let’s look at the diagrams in slides 8 through 18 in presentation [Redux from Twitter hype to production](http://slides.com/jenyaterpil/redux-from-twitter-hype-to-production#/8)

### state

> In Redux, all the application **state** is stored as a single object. It’s a good idea to think of its shape before writing any code. What’s the minimal representation of your app’s state as an object?

### actions

> **Actions** are payloads of information that send data from your application to your store. They are the *only* source of information for the store.

See `src/actions.ts` for action creator functions

### reducer

> The **reducer** takes the previous state and an action, and returns the next state.

> The reducer must be pure. **Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.**

See `src/reducers` subdirectory for reducer functions.

### store

> The **store** is the object that brings them together. The store has the following responsibilities:

* Holds application state
* Allows access to state via `getState()`
* Allows state to be updated via `dispatch(action)`
* Registers listeners via `subscribe(listener)`
* Handles unregistering of listeners via the function returned by `subscribe(listener)`

Instead of the calling store methods directly, we will use the `react-redux` package.

* Analogy for passing **props**: To withdraw small amount of cash from drive-up ATM machine, passenger hands card to driver.
* Analogy for passing through via **context**: To deposit large amount of cash from farthest drive-through lane, teller sends pneumatic tube (so people do not pass cash from car to car).

> You’ll only have a **single store** in a Redux application.

> When you want to split your data handling logic, you'll use **reducer composition** instead of many stores.

For an example of function closure pattern for singleton object without class, see lines 56–60, 98–99 in [Slim Redux in 99 lines](https://gist.github.com/gaearon/ffd88b0e4f00b22c3159)

```js
export function createStore(reducer, initialState) {
  var currentReducer = reducer;
  var currentState = initialState;
  var listeners = [];
  var isDispatching = false;
  …
  return { dispatch, subscribe, getState, replaceReducer };
}
```

## React Redux

[React bindings for Redux](https://redux.js.org/basics/usagewithreact) embrace the idea of separating presentational and container components.

* Presentational: How things **look** (markup, styles). Read data from props. Invoke callbacks from props.

* Container: How things **work** (data fetching, state updates). Subscribe to Redux state. Dispatch Redux actions

## Redux Logger

The [redux-logger](https://www.npmjs.com/package/redux-logger) package displays actions in the console.

## index.js

* `Provider` from **React Redux** is a wrapper component similar to `BrowserRouter` from React Router
* `createStore` from **Redux** creates a store from one or more reducers
* `createLogger` from **Redux Logger** displays actions in the console pane

## App.js

Simulate intermediate levels of components which don’t need to know about the counter.

Edit the `src/App.js` file:

1. Near the beginning, replace `import` statements for 4 components with `import Table from './Table';`

2. In the `render` method, replace HTML `<table>…</table>` element with React `<Table />` element

## reducers

The `src/reducers/index.js` file calls `combineReducers` from Redux with a literal object in which each key relates a pure reducer function the property value which it updates.

Edit the `switch` statement in the `src/reducers/counter.js` file:

1. Add the following to implement `'CHANGE_MAX'` action type:

    ```js
    case 'CHANGE_MAX':
      return {
        max: action.max,
        val: counter.val % (action.max + 1),
      };
    ```

2. Add the following to implement `'DECREMENT'` action type:

    ```js
    case 'DECREMENT':
      return {
        ...counter,
        val: (counter.val - 1) % (counter.max + 1)
      };
    ```

3. Adapt a copy of the previous code to implement `'INCREMENT'` action type

## Inputs

Edit the `src/Inputs.js` file:

1. Near the beginning, add `import {connect} from 'react-redux';`

2. At the end replace `export default BarV;` with the following:

    ```js
    const mapStateToProps = ({count: {max, val}}) => ({
      max,
      val,
    });

    export default connect(mapStateToProps)(Inputs);
    ```

3. Replace `onChangeMax, onDecrement, onIncrement,` with `dispatch` in destructuring

4. Replace `onClick={onDecrement}` with `onClick={() => { dispatch({type: 'DECREMENT'}); }}`

5. Replace `onClick={onChangeMax}` with `onClick={event => { dispatch({type: 'CHANGE_MAX', max: parseInt(event.target.value, 10)}); }}`

6. Replace `onClick={onIncrement}` similarly to step 4

7. Save your changes

Edit the `src/Table.js` file:

1. Delete all props in the `<Inputs />` element

2. Delete the assignment statements:

    ```js
    const max = 7;
    const val = 2;
    ```

3. Save your changes to both files.

## BarV

Edit the `src/BarV.js` file:

1. Near the beginning, add `import {connect} from 'react-redux';`

2. At the end replace `export default BarV;` with the following:

    ```js
    const mapStateToProps = ({count: {max, val}}) => ({
      max,
      val,
    });

    export default connect(mapStateToProps)(BarV);
    ```

Edit the `src/SectionBarV.js` file:

1. Replace `<BarV max={max} val={val} />` with `<BarV />`

2. Delete the assignment statements:

    ```js
    const max = 7;
    const val = 2;
    ```

3. Save your changes to both files.

## BarH

Do similarly to `src/BarH.js` and `src/SectionBarH.js` files

## ProgressH

Do similary to `src/ProgressH.js` and `src/SectionProgressH.js` files

## homework

Browse Redux docs:

* [Introduction](https://redux.js.org/introduction)
* [Basics](https://redux.js.org/basics)
* [Advanced](https://redux.js.org/advanced)
* [Recipes](https://redux.js.org/recipes)
* [Frequently Asked Questions](https://redux.js.org/faq)
