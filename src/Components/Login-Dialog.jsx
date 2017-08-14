import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

export default class LoginDialogue extends React.Component {
  // state = {
  //   open: false,
  // };


  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.onRequestClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Login"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.onRequestClose}
          >
          <h2>Choose an option:</h2>
          <RaisedButton label="Facebook Button goes here"/>
          <RaisedButton label="Google Button goes here"/>
        </Dialog>
      </div>
    );
  }
}