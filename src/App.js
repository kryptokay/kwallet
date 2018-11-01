import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BM from './BM.jpg';
import BB from './BB.jpg';
import DN from './DN.jpg';
import GOT from './GOT.jpg';
import TW from './TW.jpg';
import TWD from './TWD.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome To Kodflix</h1>
        </header>
        <p className="App-intro">
          All The Best Movies
        </p>
        <div className="container">
          <div className="item">
            <img class="BM" src={BM} alt="BM" />
            <h2>Black Mirror</h2></div>
          <div className="item">
            <img class="BB" src={BB} alt="BB" />
            <h2>Breaking Bad</h2></div>
          <div className="item">
            <img class="DN" src={DN} alt="DN" />
            <h2>Death Note</h2></div>
        </div>
        <div className="container">
          <div className="item">
            <img class="GOT" src={GOT} alt="GOT" />
            <h2>Gmae Of Thrones</h2></div>
          <div className="item">
            <img class="TW" src={TW} alt="TW" />
            <h2>The Walking Dead</h2></div>
          <div className="item">
            <img class="TWD" src={TWD} alt="TWD" />
            <h2>The Wire</h2></div>
        </div>
        {/* <img class="gof" src={gof} alt="gof" /> */}


      </div>
    );


  }
}

export default App;
