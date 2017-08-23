import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

const styles = {
  block: {
    maxWidth: 250,
    display: 'inline-block',

  },
  checkbox: {
    marginLeft: 16,
  },
};

//  If found in database checkedIcon
//  If not found in database uncheckedIcon
// const FavoriteButton = (props) => (
//   <div style={styles.block}>
//     <Checkbox
//       onCheck={props.handleFavourite}
//       checkedIcon={<ActionFavorite/>}
//       uncheckedIcon={<ActionFavoriteBorder />}
//       style={styles.checkbox}
//     />
//   </div>
// );

// export default FavoriteButton;

class FavoriteButton extends React.Component {

  constructor(props){
    super(props);

    this.handleFavourite = this.handleFavourite.bind(this);

    this.state = {
      checked: false,
      currentEmail: this.props.currentEmail,
      place_id: this.props.place_id
    }
  }

  // getFavourite (){
  //   fetch(`http://${process.env.REACT_APP_SERVER_ADDR}:${process.env.REACT_APP_SERVER_PORT}/favourite/${this.state.currentEmail}/${this.props.place_id}`, {
  //     method: 'GET'
  //   })  
  // }

  // componentDidMount() {

  // }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  handleFavourite () {
    if(this.state.checked){
      fetch(`http://${process.env.REACT_APP_SERVER_ADDR}:${process.env.REACT_APP_SERVER_PORT}/favourite/delete/${this.state.currentEmail}/${this.props.place_id}`, {
        method: 'DELETE'
      })  
    } else {
      fetch(`http://${process.env.REACT_APP_SERVER_ADDR}:${process.env.REACT_APP_SERVER_PORT}/favourite/${this.state.currentEmail}/${this.props.place_id}`, {
        method: 'POST'
      })
    }
  }


  render() {

    // let checkString = "";    

    // fetch(`http://${process.env.REACT_APP_SERVER_ADDR}:${process.env.REACT_APP_SERVER_PORT}/favourite/${this.state.currentEmail}/${this.props.place_id}`, {
    //   method: 'GET'
    // })
    // .then((response) => {
    //   // console.log(response);
    //   return response.json();
    // })
    // .then((json) => {
    //   console.log(json.place_id);
    //   checkString = json.place_id;
    // });

    // console.log(checkString);

    // if( checkString == undefined ){
    //   this.setState({
    //     checked: false
    //   })
    // } else {
    //   this.setState({
    //     checked: true
    //   })      
    // }

    let currentIcon = null;

    switch (this.state.checked) {

      case false:
        currentIcon = 
        <Checkbox 
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          onClick={this.handleFavourite}
          checkedIcon={<ActionFavorite />}
          uncheckedIcon={<ActionFavoriteBorder />}
          style={styles.checkbox}
        />
        break;
      case true:
        currentIcon = 
        <Checkbox 
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          onClick={this.handleFavourite}
          checkedIcon={<ActionFavorite />}
          uncheckedIcon={<ActionFavoriteBorder />}
          style={styles.checkbox}
        />
        break;
    }
    
    console.log(this.state.checked);

    return (
      <div style={styles.block}>
        {currentIcon}
      </div>
    );
  }
}

export default FavoriteButton;