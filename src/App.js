import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent.js';

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
        <MuiThemeProvider>
          <MyAwesomeReactComponent />
        </MuiThemeProvider>
        <h6>WORKS</h6>
        <h2>OMG!!!!!!!!!!!!!!</h2>
      </div>
    );
  }
}

export default App;
