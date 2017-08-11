import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyAwesomeReactComponent from './MyAwesomeReactComponent.js';
import DatePickerExampleSimple from './DatePickerExampleSimple.js';
import Selector from './Components/Selector.js';

class App extends Component {
  render() {
    const test = [10,20,30,40,50]
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
        <Selector selectors={test} width={100}/>
        <Selector selectors={['banana','apple','grape']} width={150}/>
      </div>
    );
  }
}

export default App;
