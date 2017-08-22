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
import {Login} from './Components/Login.jsx'
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
let g_foodInfo = []

class App extends Component {
  constructor(props) {
    super(props);
    this.handleHungryOnTap = this.handleHungryOnTap.bind(this);
    this.handleUserOnTap = this.handleUserOnTap.bind(this);
    this.handleLoginOnTap = this.handleLoginOnTap.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.handleFeedOnTap = this.handleFeedOnTap.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
    this.logoutFacebook = this.logoutFacebook.bind(this);
    this.state = {
      currentPage: 'User',
      currentUser: '',
      currentEmail: '',
      currentPicture: '',
      album: {},
      foodInfo: []
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

  handleLoginOnTap() {
    this.setState({
      currentPage: 'Login'
    });
  }

  handleFeedOnTap() {
    console.log("ASDSA")
    this.setState({
      currentPage: 'Feed'
    });
  }

  handleUserLogin(name, email, picture){
    this.setState({
      currentUser: name,
      currentEmail: email,
      currentPicture: picture
    });
  }

  updateCache(newAlbum, newInfo){
    g_album = newAlbum
    g_foodInfo = newInfo

    this.setState({
      album: newAlbum,
      foodInfo: newInfo
    })
  }

  responseFacebook (response) {
    console.log(response);
    if (response !== undefined){
      document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!';
      setTimeout(this.handleHungryOnTap,1500)
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

    // const onHungryPage = this.state.onHungryPage;
    // const onUserPage = this.state.onUserPage;
    // const onLoginPage = this.state.onLoginPage;
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
                        updateCache={this.updateCache}
                        currentEmail={this.state.currentEmail}
                        />
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
            currentPicture = {
              this.state.currentPicture
            }
          />
        break
      case 'Login':
        CurrentPage = <Login
          handleUserLogin={this.handleUserLogin}
          responseFacebook={this.responseFacebook}
        />
        break
      case 'Feed':
      CurrentPage = <Feed
                      album={this.state.album}
                      foodInfo={this.state.foodInfo}
                    />
    }

    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Navbar
            handleHungryOnTap={this.handleHungryOnTap}
            handleUserOnTap={this.handleUserOnTap}
            handleLoginOnTap={this.handleLoginOnTap}
            handleFeedOnTap={this.handleFeedOnTap}
            logoutFacebook={this.logoutFacebook}
          />
        </MuiThemeProvider>
        {CurrentPage}
      </div>

    );
  }
}

export default App;
