import React from 'react';

import Inputs from './Inputs.js';
import SectionBarH from './SectionBarH.js';
import SectionBarV from './SectionBarV.js';
import SectionProgressH from './SectionProgressH.js';

const max = 7;
const val = 2;

const Table = () => (
  <table>
    <tbody>
      <tr>
        <td className="inputs">
          <Inputs
            onChangeMax={event => {
              console.log(`onChangeMax ${event.target.value}`);
            }}
            onDecrement={() => {
              console.log('onDecrement');
            }}
            onIncrement={() => {
              console.log('onIncrement');
            }}
            max={max}
            val={val}
          />
        </td>
        <td className="bar-vertical">
          <SectionBarV />
        </td>
      </tr>
      <tr>
        <td className="progress-horizontal">
          <SectionProgressH />
        </td>
        <td className="bar-horizontal">
          <SectionBarH />
        </td>
      </tr>
    </tbody>
  </table>
);

export default Table;
