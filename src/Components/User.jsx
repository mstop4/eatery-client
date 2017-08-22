import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import UserOptions from './Buttons/UserOptions.jsx';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FriendList from './List/FriendList.jsx';
import Favourites from './List/Favourites.jsx';
import Avatar from 'material-ui/Avatar';
import '../css/profile.css';


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
      <div>
        <MuiThemeProvider>
          <UserOptions
            handleFavouritesOnTap = { this.handleFavouritesOnTap }
            handleFriendListOnTap = { this.handleFriendListOnTap }
          />
        </MuiThemeProvider>

        <MuiThemeProvider>
          <Avatar
              src={this.props.currentPicture}
              size={60}
              className="avatar"
            />
        </MuiThemeProvider>
        <p>{this.props.currentUser}</p>
        <p>{this.props.currentEmail}</p>
        <CurrentPage />
      </div>
    );
  }

}

export default User;