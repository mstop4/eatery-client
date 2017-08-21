import React from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import {List, ListItem} from 'material-ui/List';

import Room from 'material-ui/svg-icons/action/room';
import Globe from 'material-ui/svg-icons/social/public';
import Phone from 'material-ui/svg-icons/communication/phone';
import Star from 'material-ui/svg-icons/toggle/star';
import StarEmpty from 'material-ui/svg-icons/toggle/star-border';

import RaisedButton from "material-ui/RaisedButton";
import FavoriteButton from "./FavoriteButton.jsx";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import '../css/drawer.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red500} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';

import Rating from 'react-rating';
import Slider from 'react-slick';

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
      album.push(<div><img className="images" src={this.state.details.photos[photo]}/></div>)
    }
    if (album.length === 0 ){
      album.push(<div><img src='http://placekitten.com/g/400/200' /></div>)
    }

    let slideshowsettings = {
      dots: true,
      focusOnSelect: true,
      slidesToShow: 2,
      slidesToScroll: 2
    };

    let website = ""
    let phoneNumber = ""

    if (this.state.details.info) {
      website = this.state.details.info.website
      phoneNumber = this.state.details.info.formatted_phone_number
    }

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Drawer
          docked={false}
          width={'60%'}
          open={this.props.open}
          onRequestChange={this.props.request}
          openSecondary={true}
        >
          <div className="drawer" style={{height: '100%'}}>
            <h1 className="title"> {this.state.details.title} </h1>
            <FavoriteButton className="favourite" />
            <Rating initialRate={this.state.details.rating}
                    className="rating"
                    readonly={true}
                    quiet={true}
                    full={<Star/>}
                    empty={<StarEmpty/>}
            />
            <Divider />
            <div>
              <List class="contact-us-list">
                <ListItem primaryText={this.state.details.subtitle}
                          className="contact address"
                          leftIcon={<Room />}
                />
                <ListItem  className="contact email"
                           leftIcon={<Globe />}
                >
                  <a href={website}>{website}</a>
                </ListItem>
                <ListItem primaryText={phoneNumber}
                          className="contact phone"
                          leftIcon={<Phone />}
                />
              </List>
            </div>
            <Divider />
            <Slider {...slideshowsettings}>
                {album}
            </Slider>
            <Divider />
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
              <div className="reviewer"> Name Namerson </div>
            </div>
          </div>
        </Drawer>
      </MuiThemeProvider>
    );
  }
}
