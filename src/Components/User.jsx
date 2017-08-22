import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import UserOptions from './Buttons/UserOptions.jsx';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FriendList from './List/FriendList.jsx';
import Favourites from './List/Favourites.jsx';
import Avatar from 'material-ui/Avatar';
import '../css/profile.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500,
  }
});

class User extends Component {

  constructor(props){
    super(props);

    this.handleFriendListOnTap = this.handleFriendListOnTap.bind(this);
    this.handleFavouritesOnTap = this.handleFavouritesOnTap.bind(this);
    this.state = {
      onFavourites: true,
      onFriendsList: false
    }
  }

  handleFriendListOnTap() {
    this.setState({
      onFavourites: false,
      onFriendsList: true
    });
  }

  handleFavouritesOnTap() {
    this.setState({
      onFavourites: true,
      onFriendsList: false
    });
  }

  render() {

    const onFavourites = this.state.onFavourites;
    const onFriendsList = this.state.onFriendsList;

    let CurrentPage = null;

    if(onFavourites){
      CurrentPage = () => (
        <MuiThemeProvider>
          <Favourites />
        </MuiThemeProvider>
      );
    }

    if(onFriendsList){
      CurrentPage = () => (
        <MuiThemeProvider>
          <FriendList />
        </MuiThemeProvider>
      );
    }

    return (
      <div style={{textAlign: 'center'}}>
        <MuiThemeProvider>
          <Avatar
              src={this.props.currentPicture}
              size={100}
              className="avatar"
            />
        </MuiThemeProvider>
        <p className="user-name"><b>{this.props.currentUser}Username Namerson</b></p>
        <p className="user-email">{this.props.currentEmail} Email@EmailAddress.com</p>
        <h1>Favorites</h1>
        {/*}
        <MuiThemeProvider muiTheme={muiTheme}>
          <UserOptions
            handleFavouritesOnTap = { this.handleFavouritesOnTap }
            handleFriendListOnTap = { this.handleFriendListOnTap }
            className="profile-buttons"
          />
        </MuiThemeProvider>
        */}
        <CurrentPage />
      </div>
    );
  }

}

export default User;