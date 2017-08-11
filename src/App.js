import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyAwesomeReactComponent from './MyAwesomeReactComponent.js';
import MapComponent from './MapComponent.js';
import Selector from './Components/Selector.js';
import BottomNavigationExampleSimple from './Components/BottomNav.js';

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
        {/* <MuiThemeProvider>
          <MyAwesomeReactComponent />
        </MuiThemeProvider> */}
        <h6>WORKS</h6>
        <h2>Update</h2>

        <h1>My First Google Map</h1>
        <MapComponent/>
        

        <Selector selectors={test} width={100}/>
        <Selector selectors={['banana','apple','grape']} width={150}/>
        <BottomNavigationExampleSimple/>        
      </div>
    );
  }
}

export default App;
