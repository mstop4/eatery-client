import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyAwesomeReactComponent from './MyAwesomeReactComponent.js';
import MapComponent from './MapComponent.js'
import Selector from './Components/Selector.js';
import BasicExample from './Components/Routing.jsx';
import Navbar from './Components/Navbar.jsx';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {

  render() {
    const test = [10,20,30,40,50]
    return (
      <div className="App">
        <MuiThemeProvider>
          <Navbar/>
        </MuiThemeProvider>
        <BasicExample />
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
      </div>
    );
  }
}

export default App;
