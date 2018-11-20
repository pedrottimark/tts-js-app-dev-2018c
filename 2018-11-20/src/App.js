import React from 'react';

import './App.css';

import Header from './Header';
import Switch from './Switch';

import {foodGroups} from './content';
import {fetchGetFoods, fetchGetMinerals, fetchGetVitamins} from './fetch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foodGroups.map(() => []),
      isWaiting: true,
      message: '',
      minerals: [],
      vitamins: [],
    };
  }

  componentDidMount() {
    Promise.all([fetchGetFoods(), fetchGetMinerals(), fetchGetVitamins()])
      .then(([foods, minerals, vitamins]) => {
        // Separate foods by foodGroup.
        this.setState({
          foods: foodGroups.map(foodGroup =>
            foods.filter(food => food.foodGroup === foodGroup)
          ),
          minerals,
          vitamins,
          isWaiting: false,
        });
      })
      .catch(error => {
        this.setState({
          message: error.message,
          isWaiting: false,
        });
      });
  }
  render() {
    const {foods, isWaiting, message, minerals, vitamins} = this.state;
    return (
      <React.Fragment>
        <Header />
        <Switch
          foods={foods}
          isWaiting={isWaiting}
          hasError={message.length !== 0}
          minerals={minerals}
          vitamins={vitamins}
        />
      </React.Fragment>
    );
  }
}

export default App;
