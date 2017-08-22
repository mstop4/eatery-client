import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
// import ActionAndroid from 'material-ui/svg-icons/action/android';
import SocialPeople from 'material-ui/svg-icons/social/people'
import PlacesKitchen from 'material-ui/svg-icons/places/kitchen'
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red500} from 'material-ui/styles/colors';

// Creating a function that holds the button
const UserOptions = (props) => (
  <div>
    <FlatButton
      label="Favourite"
      labelPosition="before"
      primary={true}
      onTouchTap = {
        props.handleFavouritesOnTap
      }
    />
    <FlatButton
      label="Friends"
      labelPosition="before"
      primary={true}
      onTouchTap = {
        props.handleFriendListOnTap
      }
    />
  </div>
);

export default UserOptions;
