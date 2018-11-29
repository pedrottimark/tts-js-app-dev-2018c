# Lesson 17: Redux, part 2

## create-react-app

1. Change to a directory which will be the parent of a new application directory

2. Create the new application directory:

    * if `create-react-app` is installed on your computer: `create-react-app redux-2`
    * otherwise: `npx create-react-app redux-2`

3. Change to the new application directory: `cd redux-2`

4. To install dependencies, do one of the following:

    * If `yarn` is installed on your computer:

        ```sh
        yarn add --exact react-redux redux redux-thunk
        yarn add --exact --dev json-server redux-logger
        ```

    * Otherwise:

        ```sh
        npm install --save-exact react-redux redux redux-thunk
        npm install --save-exact --save-dev json-server redux-logger
        ```

5. Copy files **from** your clone of the class repository **to** the new application:

    * In the first Explorer or Finder window, copy the `db` subdirectory in the `2018-11-29` subdirectory in your clone of the class repository

    * In the second Explorer or Finder window, paste the `db` subdirectory in the new `redux-2` directory

    * In the first Explorer or Finder window, copy the `src` subdirectory in the `2018-11-29` subdirectory in your clone of the class repository

    * In the second Explorer or Finder window, paste to **replace** the `src` subdirectory in the new `redux-2` directory

6. Open the `redux-2` directory in your code editor

7. Open the `package.json` file, edit as follows, and then save your changes:

    * For the **development server** to pass requests to and responses from the data server, paste a property: `"proxy": "http://localhost:3001",`

    * To start a **data server**, paste a property within the `"scripts"` object: `"server": "json-server --delay 1000 --port 3001 --watch ./db/db.json",`

8. In the first Terminal window, start the **data server**:

    * If `yarn` is installed on your computer: `yarn server`
    * Otherwise: `npm run server`

9. In the second Terminal window, start the **development server**:

    * If `yarn` is installed on your computer: `yarn start`
    * Otherwise: `npm start`

10. After the application starts in a new tab of Chrome browser, to see **“hot reloading”** of changes:

    * Replace `React App` with `Redux 2` in the `index.html` file in `public` subdirectory of the application
    * Delete the HTML comments
    * Save your changes

## Redux Thunk

The [redux-thunk](https://www.npmjs.com/package/redux-thunk) package:

* Is middleware which allows you to write action creators that return a **function** instead of an action.
* The thunk can be used to **delay** the dispatch of an action, or to dispatch only if a certain condition is met.
* The **inner function** receives the store methods `dispatch` and `getState` as parameters.
