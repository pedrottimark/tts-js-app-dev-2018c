# Lesson 11: JavaScript tools, part 2

```sh
npm install
```

## webpack

A module bundler helps you achieve two goals which would otherwise contradict each other:

* Organize files in small modules when you develop an application.
* Minimize the number of script, style, and image files that browsers need to download when people use an application.

[webpack](https://webpack.js.org) builds a dependency graph [from top down] that includes every module your application needs, then packages all of those modules into one or more bundles.

As a contrast, both `grunt` or `gulp` process files by type [from bottom up].

Node.js “understands” CommonJS modules, but Web browsers do not. This is one of the many problems that **webpack** solves: convert from CommonJS to ordinary JavaScript.

Let’s watch [Webpack from First Principles](https://youtu.be/WQue1AN93YU) by Glen Maddern (14 minutes)

## webpack loaders

Here is the command I typed in Terminal to install devDependencies for webpack:

```sh
npm install --save-dev --save-exact webpack webpack-cli css-loader file-loader style-loader url-loader
```

* [file-loader](https://www.npmjs.com/package/file-loader) instructs webpack to emit the required object as file and to return its public URL. By default the filename of the resulting file is the MD5 hash of the file's contents with the original extension of the required resource.
* [url-loader](https://www.npmjs.com/package/url-loader) works like the file-loader, but can return a `base64` encoded DataURL if the file is smaller than a byte limit
* [style-loader](https://www.npmjs.com/package/style-loader) adds CSS to the DOM by injecting a `style` element
* [css-loader](https://www.npmjs.com/package/css-loader) interprets `@import` and `url()` like `require` and will resolve them.

Here is a super source of SVG icons: [Feather](https://feathericons.com/) by Cole Bemis

## src versus dist

To follow dependencies starting from `src/index.js` file and bundle into `dist/main.js` file:

```sh
npm run build

npm start
```

In a Web browser, open a new tab, type `localhost:3000` in address bar, and then press `enter` or `return` to request the default `index.html` file

## ESLint

[ESLint](http://eslint.org/) is a **static** code quality tool that reports errors **before** you run code.

* ES is short for ECMAScript.
* Lint is a geeky analogy from removing lint from screen in clothes dryer to removing mess from code.

Here are some [rules](http://eslint.org/rules/) to report problems related to [variables](https://eslint.org/docs/rules/#variables):

* [no-undef](https://eslint.org/docs/rules/no-undef) disallow undeclared variables
* [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars) disallow unused variables
* [no-use-before-define](https://eslint.org/docs/rules/no-use-before-define) disallow the use of variables before they are defined

Here is the command I typed in Terminal to install devDependencies for ESLint:

```sh
npm install --save-dev --save-exact eslint
```

Here are links to ESLint plugins for [editors](https://eslint.org/docs/user-guide/integrations#editors)

```sh
npm run lint src/*.js
```

## prettier

Prettier enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

Here is the command I typed in Terminal to install devDependencies for prettier:

```sh
npm install --save-dev --save-exact prettier
```

The [Configuration File](https://prettier.io/docs/en/configuration.html) can be `"prettier"` key in the project `package.json` file.

Prettier minimizes the number of format [options](https://prettier.io/docs/en/options.html)

The most important [CLI](https://prettier.io/docs/en/cli.html) option is `--write` to replace the contents of files.

```sh
npm run prettier src/*.js
```
