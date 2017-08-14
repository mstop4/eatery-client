import React, { Component } from 'react';

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
//Testing Google User Login
import { GoogleLogin } from 'react-google-login-component';
//Facebook Login
import { FacebookLogin } from 'react-facebook-login-component';

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

  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log('GOOGLE LOGIN')
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
  }

  responseFacebook (response) {
    console.log('FACEBOOK LOGIN')
    console.log(response);
    //anything else you want to do(save to localStorage)...
  }

  render() {
    function logoutFacebook(){
      window.FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          // the user is logged in and has authenticated your
          // app, and response.authResponse supplies
          // the user's ID, a valid access token, a signed
          // request, and the time the access token
          // and signed request each expire
          var uid = response.authResponse.userID;
          // var accessToken = response.authResponse.accessToken;

          window.FB.api('/'+uid+'/permissions', 'delete', function(response){});

        } else if (response.status === 'not_authorized') {
          // the user is logged in to Facebook,
          // but has not authenticated your app
        } else {
          // the user isn't logged in to Facebook.
        }
       });
    }
    const onHungryPage = this.state.onHungryPage;
    const onUserPage = this.state.onUserPage;

    //Components can be functions or classes, React gives us the choice
    //Declared an empty component
    let CurrentPage = null;

    if(onHungryPage) {
      //
      CurrentPage = () => (
        <div>
          <RestaurantChoice/>
          <MapComponent/>
        </div>
      );
    }

    if(onUserPage) {
      CurrentPage = () => (
        <User />
      );
    }
    function testClick(){
      console.log('test clicked')
    }
    return (
      <div>
        <GoogleLogin socialId={process.env.REACT_APP_GOOGLE_APPID}
               className="google-login"
               scope="profile"
               responseHandler={this.responseGoogle}
               buttonText="Login With Google"/>

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
        <button id="logout" onClick={logoutFacebook} >Logout</button>
        <MuiThemeProvider>
          <Navbar handleHungryOnTap={this.handleHungryOnTap} handleUserOnTap={this.handleUserOnTap}/>
        </MuiThemeProvider>
        <CurrentPage/>
      </div>
    );
  }
}

export default App;
