import React, { Component } from 'react';
import ReactRouter from 'react-router';
import logo from './logo.svg';
import './App.css';
import MapComponent from './Components/MapComponent.jsx'
import RestaurantChoice from './Components/RestaurantChoice.jsx'
import Selector from './Components/Selector.js';
import Navbar from './Components/Navbar.jsx';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FBLoginButton from './FBLoginButton.js';
import RandomizeGroup from './Components/RandomizeGroup.jsx';
import User from './Components/User.jsx';
import {TestPage} from './Components/TestPage.jsx'
//Facebook Login
import FacebookLogin from './Components/FacebookLogin.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleHungryOnTap = this.handleHungryOnTap.bind(this);
    this.handleUserOnTap = this.handleUserOnTap.bind(this);
    this.handleTestOnTap = this.handleTestOnTap.bind(this);
    this.logoutFacebook = this.logoutFacebook.bind(this);
    this.state = { currentPage: 'Hungry' }
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

  responseFacebook (response) {
    console.log(response);
    document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!';
  }

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
        CurrentPage = () => (
          <div>
            <RestaurantChoice/>
            <MapComponent/>
          </div>
        );
        break;
      case 'User':
        CurrentPage = () => (
          <User />
        );
        break;
      case 'Test':
        CurrentPage = () => (
          <TestPage />
        );
    }

    return (
      <div>

        <FacebookLogin socialId={process.env.REACT_APP_FB_APPID}
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       fields="id,email,name"
                       version="v2.5"
                       className="facebook-login"
                       buttonText="Login With Facebook"/>

        <p id="status" />
        <MuiThemeProvider>
          <Navbar
            handleHungryOnTap={this.handleHungryOnTap}
            handleUserOnTap={this.handleUserOnTap}
            handleTestOnTap={this.handleTestOnTap}
            logoutFacebook={this.logoutFacebook}
          />
        </MuiThemeProvider>
        <CurrentPage/>
      </div>
    );
  }
}

export default App;
