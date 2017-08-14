import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapComponent from './MapComponent.js'
import Selector from './Components/Selector.js';
import Navbar from './Components/Navbar.jsx';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FBLoginButton from './FBLoginButton.js';
import RandomizeGroup from './Components/RandomizeGroup.jsx';
import User from './Components/User.jsx';


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


  componentDidMount() {
    // This is called with the results from from window.FB.getLoginStatus().
    function statusChangeCallback(response) {
      console.log(response);
      // The response object is returned with a status field that lets the
      // app know the current login status of the person.
      // Full docs on the response object can be found in the documentation
      // for window.FB.getLoginStatus().
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
      } else {
        // The person is not logged into your app or we are unable to tell.
        document.getElementById('status').innerHTML = 'Please log ' +
          'into this app.';
      }
    }
    // This function is called when someone finishes with the Login
    // Button.  See the onlogin handler attached to it in the sample
    // code below.
    function checkLoginState() {
      window.FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });
    }

    window.fbAsyncInit = function() {
    window.FB.init({
      appId      : process.env.REACT_APP_FB_APPID,
      cookie     : true,  // enable cookies to allow the server to access
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
    });
    // Now that we've initialized the JavaScript SDK, we call
    // window.FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    window.FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });

    };

    // Load the Facebook SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // Here we run a very simple test of the Graph API after login is
    // successful.  See statusChangeCallback() for when this call is made.
    function testAPI() {
      console.log('Welcome!  Fetching your information.... ');
      window.FB.api('/me', function(response) {
        console.log(response)
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
          'Thanks for logging in, ' + response.name + '!';
      });
    }

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
        <MapComponent/>
      );
    }

    if(onUserPage) {
      CurrentPage = () => (
        <User />
      );
    }
    return (
      <div>
        <FBLoginButton/>
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
