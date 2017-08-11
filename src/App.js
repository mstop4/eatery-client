import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapComponent from './MapComponent.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Test</h1>
        <h6>AAAA</h6>
        <h6>WORKS</h6>
        <h2>Update</h2>

        <h1>My First Google Map</h1>
        <MapComponent/>
      </div>
    );
  }
}

export default App;
