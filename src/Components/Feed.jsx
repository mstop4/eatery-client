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
      album: [],
      details: {
          title: "",
          subtitle: "",
          photos: "",
          rating:""
      },
    };
  }

  componentWillReceiveProps(nextProps) {

    let flatAlbum = []

    // convert nested album into a flat hierarchy
    for (let place in nextProps.album) {
      for (let photo in nextProps.album[place]) {
        flatAlbum.push(nextProps.album[place][photo])
      }
    }

    // shuffle flat album
    for (let i = flatAlbum.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = flatAlbum[i];
        flatAlbum[i] = flatAlbum[j];
        flatAlbum[j] = temp;
    }

    this.setState({ album: flatAlbum });
  }

  handleToggle = () => this.setState({ open: true })
  handleClose = () => this.setState({ open: false })

  render = () => {

    // build grid tiles
    let tiles

    if (this.state.album.length > 0) {

      tiles = []
      let info = this.props.foodInfo

      console.log("Feed")
      console.dir(info)

      for (let photo in this.state.album) {
        tiles.push(
          <GridTile
            key={this.state.album[photo]}
            onTouchTap={() => {
              let detail = {
                    title: info[photo]["name"],
                    subtitle: info[photo]["vicinity"],
                    photos: this.state.album[photo],
                    info: info[photo],
                    rating: info[photo]["rating"]
                  }
                this.setState({details:detail})
                this.handleToggle();
            }}
          >
            <img src={this.state.album[photo]} />
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
