import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import Toggle from "material-ui/Toggle";
import Menu from "material-ui/svg-icons/navigation/menu";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import '../css/navbar.css';

const font = "'Raleway', sans-serif";

const style = {
  height: 50,
  width: 50,
  textAlign: "center",
  display: "inline-block",
  float: "left",
  marginBottom: 10,
  marginLeft: 15,
  nav:{
    fontFamily: font,
    color: 'white'
  }
};

class Login extends Component {
  static muiName = "FlatButton";

  render() {
    return <FlatButton {...this.props} label="Login" />;
  }
}

const Logged = props =>
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton>
        <Menu />
      </IconButton>
    }
    targetOrigin={{ horizontal: "left", vertical: "top" }}
    anchorOrigin={{ horizontal: "left", vertical: "top" }}
  >
    <MenuItem
      primaryText="Map"
      onTouchTap={ props.handleHungryOnTap }
    />

    <MenuItem
      primaryText="User"
      onTouchTap={ props.handleUserOnTap }
    />

    <MenuItem
      primaryText="Feed"
      onTouchTap={ props.handleFeedOnTap }
    />

    <MenuItem
      primaryText="Sign out"
      onTouchTap={ props.logoutFacebook }
    />
  </IconMenu>;

Logged.muiName = "IconMenu";

class UserIcon extends Component {
  render() {
    return (
      <Paper
        style={style}
        zDepth={3}
        circle={true}
        children={
          <img
            src=""
            /* https://vignette3.wikia.nocookie.net/meme/images/c/c7/Fd665178b5.jpg/revision/latest?cb=20160524214933 */
            height="auto"
            width="auto"
          />
        }
      />
    );
  }
}

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class Navbar extends Component {
  state = {
    logged: true
  };

  render() {
    return (
      <div>

        <AppBar style={style.nav}
          title="Eatery"
          className="navbar"
          //showMenuIconButton={false}
          iconElementLeft={
            <Logged
              handleHungryOnTap={ this.props.handleHungryOnTap }
              handleUserOnTap={ this.props.handleUserOnTap }
              handleLoginOnTap={ this.props.handleLoginOnTap}
              handleFeedOnTap={this.props.handleFeedOnTap}
              logoutFacebook={ this.props.logoutFacebook}
            />}
          showMenuIconButton={this.props.logged}
        />
      </div>
    );
  }
}

export default Navbar;
