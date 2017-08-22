import React from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import {List, ListItem} from 'material-ui/List';

import Room from 'material-ui/svg-icons/action/room';
import Globe from 'material-ui/svg-icons/social/public';
import Phone from 'material-ui/svg-icons/communication/phone';

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
import Star from 'material-ui/svg-icons/toggle/star';
import StarEmpty from 'material-ui/svg-icons/toggle/star-border';
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500,
  }
});

export default class DetailDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.handleFavourite = this.handleFavourite.bind(this);

    this.state = {
        open: false,
        details: this.props.detail,
        currentEmail: this.props.currentEmail
     };

  }

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  handleFavourite  () {
    fetch(`http://${process.env.REACT_APP_SERVER_ADDR}:${process.env.REACT_APP_SERVER_PORT}/favourite/${this.state.currentEmail}/${this.state.details.info.place_id}`, {
      method: 'POST'
    })
  }

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
    let place_id = ""

    if (this.state.details.info) {
      website = this.state.details.info.website
      phoneNumber = this.state.details.info.formatted_phone_number
      place_id = this.state.details.info.place_id
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
            <FavoriteButton className="favourite" handleFavourite={this.handleFavourite}/>
            {/* currentEmail={this.state.currentEmail} place_id={this.state.details.place_id} */}
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
              {place_id} {this.state.currentEmail}
              <div className="reviewer"> Name Namerson </div>
            </div>
          </div>
        </Drawer>
      </MuiThemeProvider>
    );
  }
}
