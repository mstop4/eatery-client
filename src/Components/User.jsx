import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import UserOptions from './Buttons/UserOptions.jsx';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FriendList from './List/FriendList.jsx';
import Favourites from './List/Favourites.jsx';


class User extends Component {

  render() {
    return (
      <div>  
        <MuiThemeProvider>
          <UserOptions />
        </MuiThemeProvider>

        <MuiThemeProvider>
          <FriendList />
        </MuiThemeProvider>

        <MuiThemeProvider>
          <Favourites />
        </MuiThemeProvider>

      </div>
    );
  }

}

export default User;