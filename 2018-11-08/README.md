# Lesson 12: React, part 1

Before we learn and practice React, let’s remember the big picture.

To add a new feature to a Web or mobile application, you might change any of the following:

* markup
* style
* data for state
* code for logic
* code for interaction is the subject of this lesson

## create-react-app

1. This is a rare exception to install a **global** package:

    * In Terminal: `npm install --global create-react-app`
    * In Chrome browser, go to `https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en`

2. Change to a directory which will be the **parent** of a new application directory

3. Create the new application directory: `create-react-app react-1-2`

4. Change to the new application directory: `cd react-1-2`

5. To install dependencies, do one of the following:

    * If `yarn` is installed on your computer: `yarn add --dev --exact isomorphic-fetch json-server prettier`
    * Otherwise: `npm install --save-dev --save-exact isomorphic-fetch json-server prettier`

6. Copy files **from** your clone of the class repository **to** the new application:

    * In an Explorer or Finder window, copy the `db` and `db-src` subdirectories of the `2018-11-08` subdirectory in your clone of the class repository

        In another Explorer or Finder window, paste the `db` and `db-src` subdirectories into the new `react-1-2` directory

    * In the first Explorer or Finder window, copy the `src` subdirectory in the `2018-11-08` subdirectory in your clone of the class repository

        In the second Explorer or Finder window, paste to **replace** the `src` subdirectory in the new `react-1-2` directory

8. Open the `react-1-2` directory in your code editor

9. Open the `package.json` file, edit as follows, and then save your changes:

    * For the **development server** to pass requests to and responses from the data server, paste a property: `"proxy": "http://localhost:3001",`

    * To start a **data server**, paste a property within the `"scripts"` object: `"server": "json-server --middlewares ./db-src/randomhouse.js --port=3001 --watch ./db/db.json",`

    * To format **JavaScript files**, paste a property within the `"scripts"` object: `"prettier": "prettier --write db-src/*.js src/*.js",`

        and then paste options above `"eslintConfig"` property:

        ```json
        "prettier": {
          "bracketSpacing": false,
          "printWidth": 80,
          "semi": true,
          "singleQuote": true,
          "tabWidth": 2,
          "trailingComma": "es5",
          "useTabs": false
        },
        ```

10. In the first Command Prompt, Shell, or Terminal window, start the **data server**:

    * If `yarn` is installed on your computer: `yarn server`
    * Otherwise: `npm run server`

11. Start a second Command Prompt, Shell, or Terminal window, start the **development server**:

    * If `yarn` is installed on your computer: `yarn start`
    * Otherwise: `npm start`

12. After the application starts in a new tab of Chrome browser, to see **“hot reloading”** of changes, replace `React App` with `react-1-2` in the `index.html` file in `public` subdirectory of the application, and then save your change

## learning objectives

1. Describe structure and behavior as functions: given state, return elements.

2. Replace template languages with JavaScript for code and JSX for markup.

3. Build with components as if they are application-specific HTML elements.

4. Pass data down the “render tree” via props of descendant components.

## example overview

Fetch data from local `json-server` and also make requests to external API:

* local data consists of opinions about books, for example from `db/db.json` file:

    ```json
    {
      "opinions": [
        {
          "id": 1,
          "authorid": "42165",
          "workid": "110398",
          "opinion": "liked"
        }
      ]
    }
    ```

* external API is [Penguin Random House REST Services API](http://www.penguinrandomhouse.biz/webservices/rest/)

* the `db-src/randomhouse.js` file is a [middleware](https://github.com/typicode/json-server#add-middlewares) module for `json-server` package

Display information from external API:

* author name in header
* book titles as rows in table

The author name and book titles are blue because they are links to external web site.

Display opinions or status of books as icons at the left of rows:

* marked: star icon has yellow background color if you want to read the book
* reading: book icon has green background color if you are reading the book
* liked: thumbs-up icon has aqua background color if you have have read and liked the book
* disliked: thumbs-down icon has silver background color if you have read and disliked the book

In part 2, we will add callback functions for `click` events so you can update the local data.

## function component

The **props** of a React component are analogous to attributes of an HTML or SVG element.

Given props as input, a **function** component returns elements as output.

Here is the minimal structure of a `MyComponent.js` file:

```js
import React from 'react';

const MyComponent = ({/* destructuring */}) => (
  // elements
);

export default MyComponent;
```

For example, the `src/Author.js` file defines the `Author` component:

```js
import React from 'react';

import {hrefAuthor} from './href.js';

const Author = ({author}) => (
  <header>
    <h1>
      {author && (
        <a href={hrefAuthor(author.authorid)}>{author.authordisplay}</a>
      )}
    </h1>
  </header>
);

export default Author;
```

## JSX

JSX is a syntax extension to JavaScript. Include JavaScript **expressions** inside curly braces.

> React implements a browser-independent DOM system for performance and cross-browser compatibility.

* In React, DOM properties and attributes (including event handlers) are in camelCase. For example, the SVG attribute `stroke-width` corresponds to the attribute `strokeWidth` in React. The exception is `aria-*` and `data-*` attributes, which are in lowercase.

* To specify a CSS **class**, use the `className` attribute.

* Since `for` is a **reserved word** in JavaScript, React elements use `htmlFor` instead.

* The `style` attribute accepts a JavaScript **object** with camelCased properties rather than a CSS string.

If the value of a prop is a string, enclose it in double quote marks, otherwise in braces.

Anywhere you need conditional code, enclose it in braces, for example:

```js
{author && (
  <a href={hrefAuthor(author.authorid)}>{author.authordisplay}</a>
)}
```

React ignores `false`, `null`, and `undefined` values so you can use conditional and `&&` operator for props like `author` which has initial value `null` before the application received a response to the request.

Will a volunteer say which ECMAScript statement you would add to the code if returned elements include **another** React component (for example, if a table returns elements which include rows).

## key prop

When you use `map` method to render an array of objects, React wants you to provide a `key` prop to uniquely identify each element. For example, the `workid` property uniquely identifies a title:

```js
<tbody>
  {titles.map(title => (
    <Title
      key={title.workid}
      opinion={findOpinion(opinions, title.workid)}
      title={title}
    />
  ))}
</tbody>
```

When you render an element, the props look similar to HTML or SVG attributes:

* `key={title.workid}`
* `opinion={findOpinion(opinions, title.workid)}`
* `title={title}`

When you define a function component, destructure the props object:

```js
const Title = ({opinion, title}) => /* output */
```

The component doesn’t need to know whether or not there is a `key` prop.

## class component

How to **decide** between a function component and a class component?

* A **function** component depends **only on props**: given props as input, return elements as output.
* A **class** component depends on props and **its own private state** which changes when it handles events.

For example, the `src/App.js` file defines the main `App` component:

```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: null,
      opinions: [],
      titles: [],
    };
  }

  componentDidMount() {
    // fetch data
  }

  render() {
    const {author, opinions, titles} = this.state;
    return (
      <section>
        <Author author={author} />
        <Titles opinions={opinions} titles={titles} />
      </section>
    );
  }
};
```

The `render` method of a class component returns elements analogous to a function component.

In part 3, we will learn more about class components for forms.

## render element

1. Open the `src/Title.js` file in your code editor:

    * replace `// TODO 1a` with `import Reading from './Reading.js';`
    * replace `{/* TODO 1b */}` with `<Reading reading={opinion === 'reading'} />`

2. Save your changes, and see the “hot reloaded” application in the browser tab

3. Open the `src/Reading.js` file and will a volunteer explain the `reading` prop

## convert svg, part 1

1. Edit the `src/Title.js` file:

    * replace `// TODO 2a` with `import` statement for `Liked` component
    * replace `{/* TODO 2b */}` with `<Liked liked={opinion === 'liked'} />`

2. Open the `src/thumbs-up.svg` file and copy its contents

3. Open the `src/Liked.js` file:

    * replace `null` with `()` and then paste inside parentheses the content that you copied
    * delete `xmlns="http://www.w3.org/2000/svg"` because React provides it
    * delete `width="24"` because CSS defines width
    * delete `height="24"` because CSS defines height
    * replace `fill="none"` with `fill={liked ? '#00ffff' : 'none'}`
    * replace `stroke="currentColor"` with `stroke={liked ? '#0000ff' : '#808080'}`
    * change hyphenated attribute names to camelCase prop names

4. Save your changes, and see the “hot reloaded” application in the browser tab

## convert svg, part 2

1. Edit the `src/Title.js` file:

    * replace `// TODO 3a` with `import` statement for `Disliked` component
    * replace `{/* TODO 3b */}` with `<Disliked disliked={opinion === 'disliked'} />`

2. Make a copy of the `src/Liked.js` file and rename the copy as `src/Disliked.js` file:

    * replace `Liked` with `Disliked`
    * replace `liked` with `disliked`

3. Open the `src/thumbs-down.svg` file and copy its contents

4. Edit the `src/Disliked.js` file:

    * replace content inside `()` at right of `=>` with the content that you copied
    * delete `xmlns="http://www.w3.org/2000/svg"` because React provides it
    * delete `width="24"` because CSS defines width
    * delete `height="24"` because CSS defines height
    * replace `fill="none"` with `fill={disliked ? '#cccccc' : 'none'}`
    * replace `stroke="currentColor"` with `stroke={disliked ? '#000000' : '#808080'}`
    * change hyphenated attribute names to camelCase prop names

5. Save your changes, and see the “hot reloaded” application in the browser tab

## homework

* Read [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html) and [DOM Elements](https://reactjs.org/docs/dom-elements.html)
* Browse [Feather Icons](https://feathericons.com/) by Cole Bemis
* Browse [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
