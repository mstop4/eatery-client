import React from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from 'material-ui/RaisedButton';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { red500, white } from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  palette: {
    canvasColor: red500,
    alternateTextColor: red500,
    textColor: white,
    primary1Color: white,
  }
});

const style = {
  button:{
    margin: 'auto',
    color: 'white',
    labelColor: 'white',

  }

}
export default class FacebookLogin extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    (function (d, s, id) {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = () => {
      window.FB.init({
        appId: this.props.socialId,
        xfbml: this.props.xfbml,
        cookie: this.props.cookie,
        version: this.props.version,
      });
    };
  }

  responseApi (authResponse) {
    window.FB.api('/me', { fields: this.props.fields }, (me) => {
      me.accessToken = authResponse.accessToken;
      this.props.responseFacebook(me);
      this.props.handleUserLogin(me.name, me.email, me.picture.data.url);
      let url = me.picture.data.url.split()
      let data = {
        name: me.name,
        picture: me.picture.data.url
      }
      fetch(`http://${process.env.REACT_APP_SERVER_ADDR}:${process.env.REACT_APP_SERVER_PORT}/facebook/${me.email}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
    });
  };

  checkLoginState (response) {
    if (response.authResponse) {
      this.responseApi(response.authResponse);
    } else {
      if (this.props.responseHandler) {
        this.props.responseHandler({ status: response.status });
      }
    }
  };

  clickHandler () {
    window.FB.login(this.checkLoginState.bind(this), { scope: this.props.scope });
  };

  render() {
    const {
      socialId, xfbml, cookie, version, language, fields, responseHandler,
      children, buttonText, ...props
    } = this.props;

    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <RaisedButton style={style.button} {...props} onClick={this.clickHandler.bind(this)}>
            Log In
          </RaisedButton>
        </MuiThemeProvider>
      </div>
    );
  }
}
