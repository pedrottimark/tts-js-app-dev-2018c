import React from 'react';

const maxValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Inputs = ({onChangeMax, onDecrement, onIncrement, max, val}) => (
  <section className="inputs">
    <div>
      <button value="decrement" onClick={onDecrement}>
        Decrement
      </button>
    </div>
    <div>
      <label>
        Val:
        <input type="text" disabled={true} value={val} />
      </label>
      <label>
        Max:
        <select onChange={onChangeMax} value={max}>
          {maxValues.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
    </div>
    <div>
      <button value="increment" onClick={onIncrement}>
        Increment
      </button>
    </div>
  </section>
);

export default Inputs;
