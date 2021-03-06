import React from "react";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import Subheader from "material-ui/Subheader";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import CircularProgress from 'material-ui/CircularProgress';
import DetailDrawer from "./DetailDrawer.jsx";

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500,
  }
});

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10
  },
  gridList: {
    width: "auto",
    height: "auto",
    overflowY: "auto"
  }
};

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
class Feed extends React.Component {
  constructor(props) {
    super(props);

    let newFlatAlbum = []

    // convert nested album into a flat hierarchy
    for (let place in this.props.album) {
      for (let photo in this.props.album[place]) {
        if (photo != "rateId") {
          newFlatAlbum.push({
            pic: this.props.album[place][photo],
            id: place,
            rateId: this.props.album[place].rateId
          })
        }
      }
    }

    //shuffle flat album
    for (let i = newFlatAlbum.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = newFlatAlbum[i];
        newFlatAlbum[i] = newFlatAlbum[j];
        newFlatAlbum[j] = temp;
    }

    this.state = {
      open: false,
      album: this.props.album,
      flatAlbum: newFlatAlbum,
      details: {
        title: "",
        subtitle: "",
        photo: "",
        place_id: "",
        checked: "",
        rateId: 0
      }
    };
  }

  componentWillReceiveProps(nextProps) {

    let newFlatAlbum = []

    // convert nested album into a flat hierarchy
    for (let place in nextProps.album) {
      for (let photo in nextProps.album[place]) {
        if (photo != "rateId") {
          newFlatAlbum.push({
            pic: this.props.album[place][photo],
            id: place,
            rateId: this.props.album[place].rateId
          })
        }
      }
    }

    //shuffle flat album
    for (let i = newFlatAlbum.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = newFlatAlbum[i];
        newFlatAlbum[i] = newFlatAlbum[j];
        newFlatAlbum[j] = temp;
    }

    this.setState({ album: nextProps.album, flatAlbum: newFlatAlbum });
  }

  handleToggle = () => this.setState({ open: true })
  handleClose = () => this.setState({ open: false })

  render = () => {

    // build grid tiles
    let tiles

    if (this.state.flatAlbum.length > 0) {

      tiles = []
      let info = this.props.foodInfo
      let placeId = ""

      for (let photo in this.state.flatAlbum) {

        placeId = this.state.flatAlbum[photo].id

        let detail = {
            title: info[placeId]["name"],
            subtitle: info[placeId]["vicinity"],
            photos: this.state.album[placeId],
            info: info[placeId],
            rating: info[placeId]["rating"],
            rateId: this.state.flatAlbum[photo].rateId
          }

        tiles.push(
          <GridTile
            key={photo}
            onTouchTap={() => {

              this.setState({details: detail})
              this.handleToggle();
            }}
          >
            <img src={this.state.flatAlbum[photo].pic} />
          </GridTile>
        )
      }
    } else {
      tiles = <CircularProgress size="75" thickness="10"/>
    }

    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div style={styles.root}>
            <GridList cols={4} cellHeight={375} style={styles.gridList} padding={10}>
              <Subheader>Restaurants</Subheader>
              {tiles}
            </GridList>
          </div>
        </MuiThemeProvider>
        <DetailDrawer
          open={this.state.open}
          currentEmail={this.props.currentEmail}
          detail={this.state.details}
          request={open => this.setState({ open })}
        />
      </div>
    );
  };
}
export default Feed;
