import React, { Component } from 'react';
import catLogo from '../../cat.svg';


import './App.css';

import CatList from '../../containers/Cat-List/cat-list';
import CatDetail from '../../containers/Cat-Detail/cat-detail';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={catLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Catalyst</h1>
        </header>
        <div className="container" >
          <div className="row">
            <div className="col-sm-4">
              <CatList/>
            </div>
            <div className="col-sm-5">
              <CatDetail/>  
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
