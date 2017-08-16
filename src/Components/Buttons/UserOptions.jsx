import React from 'react';
import Button from 'material-ui/Button';
// import ActionAndroid from 'material-ui/svg-icons/action/android';
import SocialPeople from 'material-ui/svg-icons/social/people'
import PlacesKitchen from 'material-ui/svg-icons/places/kitchen'
import FontIcon from 'material-ui/FontIcon';

// Styling the button
const styles = {
  button: {
    margin: 12,
  },
  imageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

// Creating a function that holds the button
const UserOptions = (props) => (
  <div>
    <Button
      raised
      label="Favourite"
      labelPosition="before"
      primary={true}
      icon={<PlacesKitchen />} //Put friend icon in here
      style={styles.button}
      onTouchTap = {
        props.handleFavouritesOnTap
      }
    />
    <Button
      raised
      label="Friends"
      labelPosition="before"
      primary={true}
      icon={<SocialPeople />} //Put friend icon in here
      style={styles.button}
      onTouchTap = {
        props.handleFriendListOnTap
      }
    />
  </div>
);

export default UserOptions;
