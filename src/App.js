import React, { Component } from 'react';
import ReactRouter from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
// NOT NEEDED, THIS IS THE WELCOME TO REACT CSS
// import './App.css';
import MapComponent from './Components/MapComponent.jsx'
import RestaurantChoice from './Components/RestaurantChoice.jsx'
import Selector from './Components/Selector.js';
import Navbar from './Components/Navbar.jsx';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FBLoginButton from './FBLoginButton.js';
import RandomizeGroup from './Components/RandomizeGroup.jsx';
import User from './Components/User.jsx';
import {TestPage} from './Components/TestPage.jsx'
import Feed from './Components/Feed.jsx'
//Facebook Login
import FacebookLogin from './Components/FacebookLogin.js';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red500} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500,
  }
});
let g_album = {}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleHungryOnTap = this.handleHungryOnTap.bind(this);
    this.handleUserOnTap = this.handleUserOnTap.bind(this);
    this.handleTestOnTap = this.handleTestOnTap.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.logoutFacebook = this.logoutFacebook.bind(this);
    this.state = {
      currentPage: 'Hungry',
      currentUser: '',
      currentEmail: '',
      album: {},
    }

    this.updateCache = this.updateCache.bind(this)
  }

  handleHungryOnTap() {
    this.setState({
      currentPage: 'Hungry'
    });
  }

  handleUserOnTap() {
    this.setState({
      currentPage: 'User'
    });
  }

  handleTestOnTap() {
    this.setState({
      currentPage: 'Test'
    });
  }

  handleUserLogin(name, email){
    this.setState({
      currentUser: name,
      currentEmail: email
    });
  }

  updateCache(newAlbum){
    g_album = newAlbum

    console.log("updating cache")

    this.setState({
      album: newAlbum,
    })
  }

  responseFacebook (response) {
    console.log(response);
    if (response !== undefined){
      document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!';
    }
  }

  // Deletes permission of Eatery on User's FB
  // Otherwise it will log them out of FB too for some reaosn
  logoutFacebook(){
    window.FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        // the user is logged in and has authenticated your
        // app, and response.authResponse supplies
        // the user's ID, a valid access token, a signed
        // request, and the time the access token
        // and signed request each expire
        var uid = response.authResponse.userID;
        // var accessToken = response.authResponse.accessToken;
        window.FB.api('/'+uid+'/permissions', 'delete', function(response){
        });
        document.getElementById('status').innerHTML = 'Logged out!';
      } else if (response.status === 'not_authorized') {
        // the user is logged in to Facebook,
        // but has not authenticated your app
      } else {
        // the user isn't logged in to Facebook.
      }
     });
  }
  render() {

    const onHungryPage = this.state.onHungryPage;
    const onUserPage = this.state.onUserPage;
    const onTestPage = this.state.onTestPage;
    const logoutFacebook = this.state.logoutFacebook;
    //Components can be functions or classes, React gives us the choice
    //Declared an empty component
    let CurrentPage = null;

    switch (this.state.currentPage) {
      case 'Hungry':
        CurrentPage = <RestaurantChoice
                        foodJson={this.state.foodJSON}
                        photos={this.state.photos}
                        album={this.state.album}
                        position={this.state.position}
                        updateCache={this.updateCache}/>
        break
      case 'User':
        CurrentPage =
          <User
            currentEmail = {
              this.state.currentEmail
            }
            currentUser = {
              this.state.currentUser
            }
          />
        break
      case 'Test':
        CurrentPage = <TestPage />
    }

    console.log("app: render")
    console.dir(this.state.album)

    return (
      <div>
        <span id="status" />
        <MuiThemeProvider muiTheme={muiTheme}>
          <Navbar
            handleHungryOnTap={this.handleHungryOnTap}
            handleUserOnTap={this.handleUserOnTap}
            handleTestOnTap={this.handleTestOnTap}
            logoutFacebook={this.logoutFacebook}
          />
        </MuiThemeProvider>
        {CurrentPage}
        <Feed
          key={1}
          album={this.state.album}
        />
      </div>

    );
  }
}

export default App;
