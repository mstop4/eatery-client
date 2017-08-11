import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import Toggle from "material-ui/Toggle";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";

const style = {
  height: 50,
  width: 50,
  textAlign: "center",
  display: "inline-block",
  float: "left",
  marginBottom: 10,
  marginLeft: 15
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
        <MoreVertIcon />
      </IconButton>
    }
    targetOrigin={{ horizontal: "right", vertical: "top" }}
    anchorOrigin={{ horizontal: "right", vertical: "top" }}
  >
    <MenuItem
      primaryText="Hungry"
      onTouchTap={() => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "GET"
        });
      }}
    />
    <MenuItem primaryText="User" />
    <MenuItem primaryText="Sign out" />
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
            src="https://vignette3.wikia.nocookie.net/meme/images/c/c7/Fd665178b5.jpg/revision/latest?cb=20160524214933"
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

  handleChange = (event, logged) => {
    this.setState({ logged: logged });
  };

  render() {
    return (
      <div>
        <Toggle
          label="Logged"
          defaultToggled={true}
          onToggle={this.handleChange}
          labelPosition="right"
          style={{ margin: 20 }}
        />
        <AppBar
          title="Eatery"
          //showMenuIconButton={false}
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
          iconElementLeft={<UserIcon />}
        />
      </div>
    );
  }
}

export default Navbar;