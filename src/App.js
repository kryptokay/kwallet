import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gof from './gof image.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to kwallet</h1>
        </header>
        <p className="App-intro">
          dynamic wallet for the Future Generation
        </p>
        <div className="container">
    <div className="item"><h2>Black Mirror</h2></div>
    <div className="item"><h2>Breaking Bad</h2></div>
    <div className="item"><h2>Death Note</h2></div>
    </div>
    <div className="container">
    <div className="item"><h2>Gmae Of Thrones</h2></div>
    <div className="item"><h2>The Walking Dead</h2></div>
    <div className="item"><h2>The Wire</h2></div>
    </div>
        <img class="gof" src={gof} alt="gof" />
      </div>
    );
    

  }
}

export default App;
