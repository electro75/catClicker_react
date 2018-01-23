import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

import CatList from '../Cat-List/cat-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Cat Cicker</h1>
        </header>
        <div>
          <CatList />
        </div>
      </div>
    );
  }
}

export default App;
