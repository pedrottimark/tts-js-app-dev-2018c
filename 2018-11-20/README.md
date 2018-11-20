## Lesson 15: React Router

## create-react-app

1. Change to a directory which will be the parent of a new application directory

2. Create the new application directory:

    * if `create-react-app` is installed on your computer: `create-react-app react-router`
    * otherwise: `npx create-react-app react-router`

3. Change to the new application directory: `cd react-router`

4. To install dependencies, do one of the following:

    * If `yarn` is installed on your computer:

        ```sh
        yarn add --exact react-document-title react-router-dom
        yarn add --exact --dev json-server
        ```

    * Otherwise:

        ```sh
        npm install --save-exact react-document-title react-router-dom
        npm install --save-exact --save-dev json-server
        ```

5. Open the `react-router` directory in your code editor

6. Copy files **from** your clone of the class repository **to** the new application:

    * In an Explorer or Finder window, copy the `db` subdirectory of the `2018-11-20` subdirectory in your clone of the class repository

        In another Explorer or Finder window, paste the `db` subdirectory into the new `react-router` directory

    * In the first Explorer or Finder window, copy the `src` subdirectory in the `2018-11-20` subdirectory in your clone of the class repository

        In the second Explorer or Finder window, paste to **replace** the `src` subdirectory in the new `react-router` directory

7. Open the `package.json` file, edit as follows, and then save your changes:

    * For the **development server** to pass requests to and responses from the data server, paste a property: `"proxy": "http://localhost:3001",`

    * To start a **data server**, paste a property within the `"scripts"` object: `"server": "json-server --delay 1000 --port 3001 --watch ./db/db.json --routes ./db/routes.json",`

8. In the first Terminal window, start the **data server**:

    * If `yarn` is installed on your computer: `yarn server`
    * Otherwise: `npm run server`

9. In the second Terminal window, start the **development server**:

    * If `yarn` is installed on your computer: `yarn start`
    * Otherwise: `npm start`

10. After the application starts in a new tab of Chrome browser, to see **“hot reloading”** of changes:

    * Replace `React App` with `Healthy Eating` in the `index.html` file in `public` subdirectory of the application
    * Delete the HTML comments
    * Save your changes

## Healthy Eating overview

Healthy Eating application displays information inspired by [The Nutrition Source](https://www.hsph.harvard.edu/nutritionsource/) at Harvard T.H. Chan School of Public Health, supplemented by details about vitamins and minerals from the following books:

* *The Everything Guide to Nutrition* by Nicole Cormier (pages 113-128)
* *Complete Family Nutrition* by Jane Clarke (pages 28-35)
* *The Daniel Plan* by Rick Warren, Daniel Amen, Mark Hyman (pages 79-83)

The header has 8 tabs here are the routes:

| route | main section of page |
| :--- | :--- |
| `/` | [Healthy Eating Plate](https://www.hsph.harvard.edu/nutritionsource/healthy-eating-plate/) image from `hsph.harvard.edu` web site |
| `/food-groups/…` | table of example foods in group with background color theme |
| `/vitamins` | table of vitamins |
| `/vitamins/…` | details about vitamin |
| `/minerals` | table of minerals |
| `/minerals/…` | details about mineral |

The application also displays:

* `not_found_404.svg` image for unexpected routes
* `spinning_plate.svg` while it is waiting for responses to fetch requests
* `broken_plate.svg` if any fetch requests fail or if it catches errors in section components

The only reason for the application to have so little interaction is to emphasize routing.

## json-server

The server has `db/routes.json` file [custom routes](https://github.com/typicode/json-server#add-custom-routes) to distinguish REST API routes from similar application routes:

| application route | REST API route |
| :--- | :--- |
| `/food-groups` | `/api/v1/foods` |
| `/minerals` | `/api/v1/minerals` |
| `/vitamins` | `/api/v1/vitamins` |

Here is the geeky notation:

```json
{
  "/api/v1/*": "/$1"
}
```

## React Router overview

[React Router](https://reacttraining.com/react-router/) is a collection of navigation components that **compose declaratively** with application-specific components.

Think about routing as **user interface**, not as static configuration. For example, the set of routes might change to provide dynamic user experience when people rotate mobile devices.

* In **web** applications, import components from the `react-router-dom`
* In **React Native** applications, import components from the `react-router-native` however I recommend instead [React Navigation](https://reactnavigation.org)

React Router provides three types of [components](https://reacttraining.com/react-router/web/guides/basic-components).

### router components

[`BrowserRouter`](https://reacttraining.com/react-router/web/api/BrowserRouter) uses HTML5 [`history`](https://developer.mozilla.org/en-US/docs/Web/API/History) to keep user interface and URL in sync.

If an application also uses Redux, then `BrowserRouter` is child of `Provider` and parent of `App` component. React Router and Redux both use React [context](https://reactjs.org/docs/context.html) to pass data through the component tree without having to pass props down manually at every level.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
```

### route matching components

[`Route`](https://reacttraining.com/react-router/web/api/Route) compares `pathname` of the current `location` to its `path` prop, and then:

* if it matches, render content
* if it doesn’t match, render `null`

`Route` renders content by either of the following props:

* `component` prop refers to a component function or class, which receives [`match`](https://reacttraining.com/react-router/web/api/match), [`location`](https://reacttraining.com/react-router/web/api/location), [`history`](https://reacttraining.com/react-router/web/api/history) as its props

    ```js
    <Route exact path="/" component={Home}/>
    ```

* `render` prop has an inline function closure if a component needs values of in-scope variables as props:

    ```js
    <Route
      path="/"
      exact
      render={() => <MainHome isWaiting={isWaiting} hasError={hasError} />}
    />
    ```

[`Switch`](https://reacttraining.com/react-router/web/api/Switch) renders only the first `Route` or `Redirect` that matches the current `location`

```js
<Switch>
  <Route exact path='/' component={Home}/>
  <Route path='/about' component={About}/>
  <Route path='/contact' component={Contact}/>
</Switch>
```

## params

Some routes consist of plural noun like `/vitamins` with a parameter like `:vitamin` to match the id.

In the `render` callback function, use object destructuring to get `match` prop of the argument.

Its `params` property is an object which consists of keys which correspond to parameters in the route.

```js
<Route
  path="/vitamins/:vitamin"
  render={({match}) => {
    const vitaminId = match.params.vitamin;
```

## exact

When the `exact` prop is true, a `Route` element matches only if the path matches the `location.pathname` exactly. For example, when your routes include both of the following:

* `<Route path="/vitamins" exact`
* `<Route path="vitamins/:vitamin"`

### navigation components

[`Link`](https://reacttraining.com/react-router/web/api/Link) component renders an `a` element

```js
<Link to='/courses?sort=name'>courses</Link>
```

[`NavLink`](https://reacttraining.com/react-router/web/api/NavLink) can style itself as `active` when its `to` prop matches the current `location`

```js
<nav>
  <NavLink to="/">Home</Link>
  <NavLink to="/about">About</Link>
  <NavLink to="/topics">Topics</Link>
</nav>
```

## NavLink

1. In your code editor, open the `src/Header.js` file:

    * Click a tab to see the route change but style for active tab isn’t quite right
    * Add `import` state for `NavLink` named export from `react-router-dom` package
    * Replace `a` elements with `NavLink`
    * Replace `href` properties with `to` props

2. Save your changes

3. In the browser, click a tab to see style for active tab is better

## 404

The last `Route` in `Switch` element is like `default:` in `switch` statement:

```js
<Switch>
  …
  <Route
    render={() => <Main404 isWaiting={isWaiting} hasError={hasError} />}
  />
</Switch>
```

To see an example of an unexpected route:

1. In the browser, click the `minerals` or `vitamins` link

2. Edit the `src/Switch.js` file:

    * Delete the set of `{/*` and `*/}` comments surrounding `Route` for `Main404` element

3. Save your changes

4. Refresh the web page

5. Edit the `src/Switch.js` file:

    * Delete the `/*` and `*/` surrounding `import` statements
    * Delete set of `{/*` and `*/}` comments surrounding `Route` for `path="/minerals"`
    * Delete set of `{/*` and `*/}` comments surrounding `Route` for `path="/vitamins"`

6. Save your changes

7. Refresh the web page

## Link

1. Edit the `src/MineralsSection.tsx` and `src/VitaminsSection` files:

    * Replace `a` element with `Link`
    * Replace `href` property with `to` prop

2. Save your changes

3. Refresh the web page

## error boundary

> A JavaScript error in a part of the UI shouldn’t break the whole app. To solve this problem for React users, React 16 introduces a new concept of an “error boundary”.

> Error boundaries are React components that **catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI** instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

> Error boundaries work like a JavaScript `catch {}` block, but for components. Only class components can be error boundaries. In practice, most of the time you’ll want to declare an error boundary component once and use it throughout your application.

> Note that **error boundaries only catch errors in the components below them in the tree**. An error boundary can’t catch an error within itself. If an error boundary fails trying to render the error message, the error will propagate to the closest error boundary above it. This, too, is similar to how `catch {}` block works in JavaScript.

The [`componentDidCatch`](https://reactjs.org/docs/react-component.html#componentdidcatch) lifecycle method of a class component is called after an error has been thrown by a descendant component.

To see an example of an error:

1. Edit the `src/fetch.ts` file:

    * Replace `/api/vitamins` with `/api/vitaminx`

2. Save your change

3. Refresh the web page

4. Edit the `src/fetch.ts` file:

    * Replace `/api/vitaminx` with `/api/vitamins`

5. Save your change

6. Refresh the web page

## homework

* Browse examples of [React Router Web](https://reacttraining.com/react-router/web/guides/quick-start)

* Browse [React Navigation](https://reactnavigation.org) web site

* Watch video about [Suspense](https://www.youtube.com/watch?v=6g3g0Q_XVb4) by Dan Abramov
