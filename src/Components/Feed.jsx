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
    justifyContent: "space-around"
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
    this.state = {
      open: false,
      album: {},
      flatAlbum: [],
      details: {
          title: "",
          subtitle: "",
          photos: "",
          rating:""
      },
    };
  }

  componentWillReceiveProps(nextProps) {

    let newFlatAlbum = []

    // convert nested album into a flat hierarchy
    for (let place in nextProps.album) {
      for (let photo in nextProps.album[place]) {
        newFlatAlbum.push({
          pic: nextProps.album[place][photo],
          id: place
        })
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
        console.log(this.state.album)

        let detail = {
            title: info[placeId]["name"],
            subtitle: info[placeId]["vicinity"],
            photos: this.state.album[placeId],
            info: info[placeId],
            rating: info[placeId]["rating"]
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
            <GridList cols={4} cellHeight={180} style={styles.gridList} padding={0}>
              <Subheader>Restaurants</Subheader>
              {tiles}
            </GridList>
          </div>
        </MuiThemeProvider>
        <DetailDrawer
          open={this.state.open}
          detail={this.state.details}
          request={open => this.setState({ open })}
        />
      </div>
    );
  };
}
export default Feed;
