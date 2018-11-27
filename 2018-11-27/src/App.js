import React, {Component} from 'react';

import './App.css';

import BarH from './BarH.js';
import BarV from './BarV.js';
import Inputs from './Inputs.js';
import ProgressH from './ProgressH.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: {
        max: 10,
        val: 0,
      },
    };
  }

  onChangeMax = event => {
    console.log(typeof event.target.value);
    const max = parseInt(event.target.value, 10);
    this.setState(({counter}) => ({
      counter: {
        max,
        val: counter.val % (max + 1),
      },
    }));
  };

  onDecrement = () => {
    this.setState(({counter}) => ({
      counter: {
        ...counter,
        val: (counter.val - 1) % (counter.max + 1),
      },
    }));
  };

  onIncrement = () => {
    this.setState(({counter}) => ({
      counter: {
        ...counter,
        val: (counter.val + 1) % (counter.max + 1),
      },
    }));
  };

  render() {
    const {max, val} = this.state.counter;
    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              <td className="inputs">
                <Inputs
                  onChangeMax={this.onChangeMax}
                  onDecrement={this.onDecrement}
                  onIncrement={this.onIncrement}
                  max={max}
                  val={val}
                />
              </td>
              <td className="bar-vertical">
                <section>
                  <BarV max={max} val={val} />
                </section>
              </td>
            </tr>
            <tr>
              <td className="progress-horizontal">
                <section>
                  <ProgressH max={max} val={val} />
                </section>
              </td>
              <td className="bar-horizontal">
                <section>
                  <BarH max={max} val={val} />
                </section>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
