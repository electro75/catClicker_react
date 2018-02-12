import React, { Component } from 'react';
import catLogo from '../../cat.svg';


import './App.css';

import CatList from '../../containers/Cat-List/cat-list';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={catLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Catalyst</h1>
        </header>
        <div>
          <CatList/>
        </div>
      </div>
    );
  }
}

export default App;
