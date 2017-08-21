import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import UserOptions from './Buttons/UserOptions.jsx';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FriendList from './List/FriendList.jsx';
import Favourites from './List/Favourites.jsx';
import Avatar from 'material-ui/Avatar';

const style = {margin: 5};

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
        <p>{this.props.currentUser}, {this.props.currentEmail}</p>
        <MuiThemeProvider>
          <Avatar
              src={this.props.currentPicture}
              size={60}
              style={style}
            />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <UserOptions 
            handleFavouritesOnTap = { this.handleFavouritesOnTap }
            handleFriendListOnTap = { this.handleFriendListOnTap }
          />
        </MuiThemeProvider>
        <CurrentPage />

      </div>
    );
  }

}

export default User;