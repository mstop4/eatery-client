import React from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import FavoriteButton from "./FavoriteButton.jsx";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Rating from "react-rating";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import Star from "material-ui/svg-icons/toggle/star"
import '../css/drawer.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red500} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500,
  }
});

export default class DetailDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false,
        details: this.props.detail
     };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  detail = this.props.detail;

  componentWillReceiveProps(nextProps) {
    this.setState({ details: nextProps.detail });
  }

  render() {

    let album = []

    for (let photo in this.state.details.photos) {

      // fix this later
      album.push(<img src={this.state.details.photos[photo]}/>)
      break;
    }

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Drawer
          docked={false}
          width={'50%'}
          open={this.props.open}
          onRequestChange={this.props.request}
          openSecondary={true}
        >
          <div className="drawer">
            <h1 className="title"> {this.state.details.title} </h1>
            <FavoriteButton className="favourite"/>
            <p> {this.state.details.rating}</p>
            <Divider />
            <div>
              <ul class="contact-us-list">
                <li class="address">{this.state.details.subtitle}</li>
                <li class="email">
                  <a href="mailto:">hello@yeticave.com</a>
                </li>
                <li class="phone">1 (408) 445 9978</li>
              </ul>
            </div>
            <Divider />
            <div className="album">
              {album}
            </div>
            <div className="reviews">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in
              bibendum tortor, id placerat ex. Pellentesque augue quam, iaculis id
              ligula a, rutrum placerat lectus. Maecenas venenatis nibh vitae
              euismod pharetra. In a ex at justo aliquet imperdiet in a nibh. Sed
              blandit id metus quis malesuada. Curabitur in velit lectus. Ut elit
              odio, auctor dignissim volutpat eget, placerat bibendum nisi.
              Curabitur imperdiet urna eu ipsum pretium, in tincidunt tellus
              commodo. Ut tempor laoreet arcu, nec tristique purus congue ut.
              Quisque sit amet auctor erat
            </div>
          </div>
        </Drawer>
      </MuiThemeProvider>
    );
  }
}
