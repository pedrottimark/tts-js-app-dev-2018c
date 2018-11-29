import React from 'react';

import './App.css';
import Header from './Header.js';
import Input from './Input.js';
import Purchases from './Purchases.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Input />
          <Purchases />
        </main>
      </div>
    );
  }
}

export default App;
