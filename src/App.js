import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to kwallet</h1>
        </header>
        <p className="App-intro">
          dynamic wallet for the future generation
        </p>
      </div>
    );
  }
}

export default App;