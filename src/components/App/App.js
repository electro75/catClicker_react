import React, { Component } from 'react';
import catLogo from '../../cat.svg';
import roberto from '../../cat_images/img_3.jpg';
import subhash from '../../cat_images/img_4.jpg';
import luis from '../../cat_images/img_5.jpg';
import gabriella from '../../cat_images/img_6.jpg';

import './App.css';

import CatList from '../Cat-List/cat-list';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cats: [
        { name: 'Roberto', src: roberto , clicks: 0 },
        { name: 'Subhash', src: subhash , clicks: 0 },
        { name: 'Luis', src: luis , clicks: 0 },
        { name: 'Gabriella', src: gabriella , clicks: 0 }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={catLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Catalyst</h1>
        </header>
        <div>
          <CatList cats = { this.state.cats } />
        </div>
      </div>
    );
  }
}

export default App;
