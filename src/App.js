import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FBLoginButton from './FBLoginButton.js';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div id="fb-root"></div>

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React is alright</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <FBLoginButton/>
        <p id="status" />
      </div>
    );
  }
}

export default App;
