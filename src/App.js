import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyAwesomeReactComponent from './MyAwesomeReactComponent.js';
import MapComponent from './MapComponent.js'
import Selector from './Components/Selector.js';
import Navbar from './Components/Navbar.jsx';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";



class App extends Component {

  constructor(props) {
    super(props);

    this.handleHungryOnTap = this.handleHungryOnTap.bind(this);
    this.handleUserOnTap = this.handleUserOnTap.bind(this);
    this.state = {
      onHungryPage: true,
      onUserPage: false
    }
  }

  handleHungryOnTap() {
    this.setState({
      onHungryPage: true,
      onUserPage: false
    });
  }

  handleUserOnTap() {
    this.setState({
      onHungryPage: false,
      onUserPage: true
    });
  }

  render() {
    const onHungryPage = this.state.onHungryPage;
    const onUserPage = this.state.onUserPage;

    let currentPage = null;
    if(onHungryPage) {
      currentPage = <p>On Hungry Page</p>
    }

    if(onUserPage) {
      currentPage = <p>On User Page </p>
    }

    return (
      <div className="App">
        <MuiThemeProvider>
          <Navbar handleHungryOnTap={this.handleHungryOnTap} handleUserOnTap={this.handleUserOnTap}/>
        </MuiThemeProvider>
        {currentPage}
        <p className="App-intro">
           To get started, edit <code>src/App.js</code> and save to reload.
        </p>

         <h1>My First Google Map</h1>
         <MapComponent/>

         <Selector selectors={['banana','apple','grape']} width={150}/>

      </div>
    );
  }
}

export default App;
