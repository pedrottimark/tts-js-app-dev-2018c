# Lesson 14: React, part 3

## create-react-app

1. Change to a directory which will be the parent of a new application directory

2. Create the new application directory:

    * if `create-react-app` is installed on your computer: `create-react-app react-3`
    * otherwise: `npx create-react-app react-3`

3. Open the `react-3` directory in your code editor

4. In Terminal, make `react-3` is current directory, and then start the development server:

    * If `yarn` is installed on your computer: `yarn start`
    * Otherwise: `npm start`

5. After application starts in browser, to see “hot reloading” of changes:

    * in the `public/index.html` file, replace `React App` with `react-3`
    * save your change

## controlled elements

> In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with `setState`.

> We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.

## form with submit button

1. In your code editor, open the `src/App.js` file:

    * Add constructor above `render` method in `App` class:

        ```js
        constructor(props) {
          super(props);
          this.state = {
          };
        }
        ```

    * Add method between `constructor` and `render` method in `App` class:

        ```js
        onSubmit = () => {
          console.log(JSON.stringify(this.state, null, 2));
        }
        ```

    * Replace contents of `return (…);` statement with the following:

        ```js
        return (
          <form name="react3" onSubmit={this.onSubmit}>
            <button type="submit">Add to Cart</button>
          </form>
        );
        ```

    * Delete statement near beginning of file: `import logo from './logo.svg';`

2. Save your changes

3. In the browser tab:

    * Open the `Console` pane

    * Click the `Add to Cart` button

    * See no output in `Console` pane

    * See `localhost:3000/?` in address bar

    * Edit `localhost:3000` in address bar

4. Edit the `src/App.js` file, to replace `onSubmit` method:

    ```js
    onSubmit = event => {
      event.preventDefault();
      console.log(JSON.stringify(this.state, null, 2));
    }
    ```

5. Save your changes

6. In the browser tab:

    * Click the `Add to Cart` button

    * See output in `Console` pane

    * See `localhost:3000` in address bar

## input type="checkbox"

[`<input type="checkbox" />`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) has a `checked` property with boolean value.

1. Edit the `src/App.js` file:

    * Insert initial values of `state` in constructor:

        ```js
        this.state = {
          local: true,
          organic: false,
        };
        ```

    * Insert destructuring assignment in `render` method:

        ```js
        const {local, organic} = this.state;
        ```

    * Insert the following elements as descendants of `form` element above `button` element:

        ```js
        <fieldset>
        <label><input type="checkbox" name="local" checked={local} />locally grown</label>
        <label><input type="checkbox" name="organic" checked={organic} />organic</label>
        </fieldset>
        ```

2. Save your changes

3. In the browser tab, see:

    * local check box is checked and organic check box isn’t checked

    * check boxes don’t change when you click them

    * the `Console` pane displays a warning

4. Edit the `src/App.js` file:

    * Add `onChangeCheckbox` method to `App` class:

        ```js
        onChangeCheckbox = event => {
          const {name} = event.target;
          this.setState(state => ({
            [name]: !state[name]
          }));
        }
        ```

    * Add `onChange={this.onChangeCheckbox}` prop to both `input` elements

5. Save your changes

6. In the browser tab, see:

    * check boxes change when you click them

    * the `Console` pane doesn’t display a warning

> In ECMAScript 6, computed property names are part of the object literal syntax, and they use the same square bracket notation that has been used to reference computed property names in object instances.

> The square brackets inside the object literal indicate that the property name is computed, so its contents are evaluated as a string.

```js
this.setState(state => ({
  [name]: !state[name]
}));
```

## input type="radio"

[`<input type="radio" />`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) has a `value` property with string value and a `checked` property with a boolean value.

In a group with same `name` prop, only one radio button can be selected at the same time.

1. Create a new `src/Radios.js` file:

    * Type `import` statement for React at the beginning

    * Type `export` statement for `Radios` at the end

    * Paste function definition in the middle:

        ```js
        const Radios = ({name, values, currentValue, onChange}) => (
          <fieldset>
            {values.map(value => (
              <label key={value}>
                <input
                  type="radio"
                  name={name}
                  value={value}
                  checked={value === currentValue}
                  onChange={onChange}
                />
                {value}
              </label>
            ))}
          </fieldset>
        );
        ```

2. Edit the `src/App.js` file:

    * Add `import` statement for `Radios` component near the beginning of file

    * Add assignment statement below `import` statements and above `App` component:

        ```js
        const foodGroups = [
          'vegetables',
          'fruits',
          'grains',
          'protein',
          'oils',
          'fluids',
        ];
        ```

    * Add `foodGroup` to initial values of `state` in constructor:

        ```js
        this.state = {
          foodGroup: '',
          local: true,
          organic: false,
        };
        ```

    * Add `onChangeOption` method to `App` class:

        ```js
        onChangeOption = event => {
          const {name, value} = event.target;
          this.setState(state => ({
            [name]: value
          }));
        }
        ```

    * Add `foodGroup` to destructuring assignment in `render` method:

        ```js
        const {foodGroup, local, organic} = this.state;
        ```

    * Insert the following element as child of `form` element above `fieldset` element:

        ```js
        <Radios
          name="foodGroup"
          values={foodGroups}
          currentValue={foodGroup}
          onChange={this.onChangeOption}
        />
        ```

3. Save your changes

4. In the browser tab, see:

    * radio buttons change when you click them

    * the `Console` pane displays current `state` when you click `Add to Cart`

## select and option

[`select`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) and [`option`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option) is similar to `<input type="radio"`

1. Create a new `src/Select.js` file:

    * Type `import` statement for React at the beginning

    * Type `export` statement for `Select` at the end

    * Paste function definition in the middle:

        ```js
        const Select = ({name, values, currentValue, onChange}) => (
          <select name={name} value={currentValue} onChange={onChange}>
            {values.map(value => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        );
        ```

2. Edit the `src/App.js` file:

    * Add `import` statement for `Select` component near the beginning of file

    * Insert the following element as child of `form` element above `Radios` element:

        ```js
        <Select
          name="foodGroup"
          values={foodGroups}
          currentValue={foodGroup}
          onChange={this.onChangeOption}
        />
        ```

3. Save your changes

4. In the browser tab, see:

    * either select or radio buttons displays option when you select or click to change it

    * the `Console` pane displays current `state` when you click `Add to Cart`

## input type="text"

[`<input type="text" />`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text) has a `value` prop with string value.


1. Create a new `src/Text.js` file:

    * Type `import` statement for React at the beginning

    * Type `export` statement for `Text` at the end

    * Paste function definition in the middle:

        ```js
        const Text = ({label, name, value, feedback, onChange}) => (
          <div>
            <label>
              {`${label}:`}
              <input type="text" name={name} value={value} onChange={onChange} />
            </label>
            <span>
            {feedback}
            </span>
          </div>
        );
        ```

2. Edit the `src/App.js` file:

    * Add `import` statement for `Text` component near the beginning of file

    * Add `onChangeCode` method to `App` class:

        ```js
        onChangeCode = event => {
          const {value} = event.target;
          console.log(value);
          this.setState({
            code: value
          });
        }
        ```

    * Add `code` and `codeFeedback` to destructuring assignment in `render` method:

        ```js
        const {code, codeFeedback, foodGroup, local, organic} = this.state;
        ```

    * Insert the following element as child of `fieldset` element below `label` elements:

        ```js
        <Text
          label="PLU code"
          name="code"
          value={code}
          feedback={codeFeedback}
          onChange={this.onChangeCode}
        />
        ```

3. Save your changes

4. In the browser tab, see:

    * the `Console` pane displays warning when you type in `PLU code` box

5. Edit the `src/App.js` file:

    * Add `code` and `codeFeedback` to initial values of `state` in constructor:

      ```js
      this.state = {
        code: '',
        codeFeedback: '',
        foodGroup: '',
        local: true,
        organic: false,
      };
      ```

6. Save your changes

7. In the browser tab, see when you type in `PLU code` box that the `Console` pane:

    * doesn’t displays warning

    * does displays `value` of `input` element

## input validation

[Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) are patterns used to match character combinations in strings.

1. Edit the `src/App.js` file:

    * Add assignment statement below `import` statements and above `App` component:

        ```js
        const PLU_CODE = /^\d\d\d\d$/; // four digits
        const PLU_CODE_PARTIAL = /^\d{0,4}$/; // zero to four digits
        const QUANTITY = /^\d+$/;
        ```

    * Add test and feedback to `onChangeCode` method:

        ```js
        onChangeCode = event => {
          const {value} = event.target;
          const codeFeedback = PLU_CODE.test(value) || PLU_CODE_PARTIAL.test(value)
            ? ''
            : 'please type 4 digits'
          console.log(value, codeFeedback);
          this.setState({
            code: value,
            codeFeedback
          });
        }
        ```

2. Save your changes

3. In the browser tab, see when you type in `PLU code` box:

    * the `Console` pane displays `value` of `input` element and `codeFeedback`

    * the form displays feedback only if you type non-digits or too many digits

4. Edit the `src/App.js` file:

    * Add `quantity` and `quantityFeedback` with initial value empty string to `state` in constructor

    * Add `quantity` and `quantityFeedback` to destructuring assignment in `render` method

    * Add `onChangeQuantity` method:

        ```js
        onChangeQuantity = event => {
          const {value} = event.target;
          const quantity = value.trim(); // remove leading and trailing spaces
          const quantityFeedback = quantity.length === 0 || QUANTITY.test(quantity)
            ? ''
            : 'please type at least one digit'
          console.log(value, quantityFeedback);
          this.setState({
            quantity,
            quantityFeedback
          });
        }
        ```

    * Insert the following element as child of `fieldset` element below `Text` element:

        ```js
        <Text
          label="Quantity"
          name="quantity"
          value={quantity}
          feedback={quantityFeedback}
          onChange={this.onChangeQuantity}
        />
        ```

3. Save your changes

4. In the browser tab, see when you type in `PLU code` box:

    * the `Console` pane displays trimmed `quantity` and `quantityFeedback`

    * the form displays feedback only if you type non-digits

5. Edit the `src/App.js` file:

    * Add `isSubmitEnabled` with initial value `false` to `state` in constructor

    * Add `isSubmitEnabled` to destructuring assignment in `render` method

    * Add `disabled={!isSubmitEnabled}` prop to `button` element in `render` method

6. Save your changes

7. In the browser tab, see `Add to Cart` button is disabled

8. Edit the `src/App.js` file:

    * Add function definition below regular expressions and above `App` component

        ```js
        const computeSubmitEnabled = ({code, quantity}) => PLU_CODE.test(code) && QUANTITY.test(quantity);
        ```

    * Replace `onChangeCode` method:

        ```js
        onChangeCode = event => {
          const {value} = event.target;
          const code = value.trim();
          const codeFeedback = PLU_CODE.test(code) || PLU_CODE_PARTIAL.test(code)
            ? ''
            : 'please type 4 digits'
          console.log(value, codeFeedback);
          this.setState(({quantity}) => ({
            code: value,
            codeFeedback,
            isSubmitEnabled: computeSubmitEnabled({code, quantity})
          }));
        }
        ```

    * Replace `setState` in `onChangeQuantity` method:

        ```js
        this.setState(({code}) => ({
          isSubmitEnabled: computeSubmitEnabled({code, quantity}),
          quantity,
          quantityFeedback
        }));
        ```

    * Replace `onSubmit` method:

        ```js
        onSubmit = event => {
          event.preventDefault();
          const {code, local, organic, quantity} = this.state;
          console.log(JSON.stringify({code, local, organic, quantity}, null, 2));
        }
        ```

9. Save your changes

10. In the browser tab, see:

    * the `Add to Cart` button is disabled until `PLU code` and `Quantity` are valid

    * the `Console` pane displays the data for a POST request when you click `Add to Cart`

    * how do you clear `code` and `quantity` after you click the button?

## textarea

[`textarea`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)  has a `value` prop with string value.

## homework

Read [Computed Property Names](https://leanpub.com/understandinges6/read#leanpub-auto-computed-property-names) in *Understanding ECMAScript 6* by Nicholas C. Zakas

Read [Forms](https://reactjs.org/docs/forms.html) at reactjs.org

Watch [A practical guide to Redux Form](https://www.youtube.com/watch?v=ey7H8h4ERHg) by Erik Rasmussen (about 40 minutes)
* Please ignore his remark about “dumb monkies”
* His overview or React data flow includes the concept of [lifting state up](https://reactjs.org/docs/lifting-state-up.html) to form component
* At the interruption about 9 minutes, skip ahead to 11:11
* Pay special attention to demo how to add Field components
* Stop at 41:00
