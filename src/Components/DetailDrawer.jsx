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

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500,
  }
});

export default class DetailDrawer extends React.Component {
  constructor(props) {
    super(props);

    let ratingsArray = []
    for (let i = 0; i < 20; i++) {
      ratingsArray.push({
            price: 0,
            quality: 0,
            portions: 0
      })
    }

    this.state = {
        open: false,
        details: this.props.detail,
        currentEmail: this.props.currentEmail,
        ratings: ratingsArray
     };
  }

  detail = this.props.detail;

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  handleFavourite = () => {
    fetch(`http://${process.env.REACT_APP_SERVER_ADDR}:${process.env.REACT_APP_SERVER_PORT}/favourite/${this.state.currentEmail}/${this.state.details.info.place_id}`, {
      method: 'POST'
    })
  }

  handleRate = (rate, category, index) => {

    let newRatings = this.state.ratings.slice()
    newRatings[index][category] = rate

    this.setState({ratings: newRatings})

    //fetch(`http://${process.env.REACT_APP_SERVER_ADDR}:${process.env.REACT_APP_SERVER_PORT}/save/${this.props.currentEmail}/:googleId/${newRatings[index][category].price}/${newRatings[index][category].quality}/${newRatings[index][category].portions}`)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ details: nextProps.detail });
  }

  render() {
    let album = []

    for (let photo in this.state.details.photos) {
      if (photo != "rateId") {
        album.push(<div><img className="images" src={this.state.details.photos[photo]}/></div>)
      }
    }

    if (album.length === 0 ){
      album.push(<div><img src='http://placekitten.com/g/400/200' /></div>)
    }

    let slideshowsettings = {
      dots: true,
      focusOnSelect: true,
      slidesToShow: 2,
      slidesToScroll: 1
    };

    let website = "Unavailable"
    let phoneNumber = "Unavailable"
    let rating = 0
    let reviews = []
    let openings = ""
    let info = this.state.details.info
    let place_id = ""

    if (info) {
      if (info.place_id)
        place_id = info.place_id

      if (info.website) {
        website = <a href={this.state.details.info.website} target="_blank">{this.state.details.info.website}</a>
      }

      if (info.formatted_phone_number) {
        phoneNumber = this.state.details.info.formatted_phone_number
      }

      if (info.rating) {
        rating = this.state.details.info.rating
      }

      // reviews
      for (let review in info.reviews) {

        let curReview = info.reviews[review]

        reviews.push(
            <div className="reviews">
              <div>
                <span className="reviewer">{curReview.author_name} </span>
                <Rating
                  initialRate={curReview.rating}
                  className={"star-rating detailed-rating"}
                  empty={<StarBorder/>}
                  full={<Star/>}
                  readonly
                />
                <div className="review-date">{curReview.relative_time_description}</div>
              </div>
              {curReview.text}
            </div>
        )
      }

      // get opening hours for today and make it presentable
      // note: Date.getDay starts on Sunday, but Google Places starts on Monday.
      let curWeekday = (new Date().getDay()+6) % 7
      let opening_text = info.opening_hours.weekday_text[curWeekday]
      let colonPos = opening_text.indexOf(":")
      opening_text = opening_text.slice(colonPos+2)

      openings = <p>Hours: {opening_text}</p>
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
            <FavoriteButton
              className="favourite"
              currentEmail={this.state.currentEmail}
              place_id={this.props.detail.place_id}
            />
            <div>
            <Rating
              initialRate={rating}
              className={"star-rating"}
              empty={<StarBorder/>}
              full={<Star/>}
              readonly={true}

            />
            {openings}
            </div>
            <Divider />
            <div className="self-rating-container">
              <p >Your Rating</p>
              <span>
                Price
                <Rating
                  initialRate={this.state.ratings[this.state.details.rateId].price}
                  className={"star-rating self-rating red"}
                  empty={<StarBorder/>}
                  full={<Star/>}
                  fractions={2}
                  onChange={(rate) => {this.handleRate(rate, "price", this.state.details.rateId)}}
                />
              </span>
              <span>
                Quality
                <Rating
                  initialRate={this.state.ratings[this.state.details.rateId].quality}
                  className={"star-rating self-rating red"}
                  empty={<StarBorder/>}
                  full={<Star/>}
                  fractions={2}
                  onChange={(rate) => {this.handleRate(rate, "quality", this.state.details.rateId)}}
                />
              </span>
              <span>
                Portions
                <Rating
                  initialRate={this.state.ratings[this.state.details.rateId].portions}
                  className={"star-rating self-rating red"}
                  empty={<StarBorder/>}
                  full={<Star/>}
                  fractions={2}
                  onChange={(rate) => {this.handleRate(rate, "portions", this.state.details.rateId)}}
                />
              </span>
            </div>
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
                  {website}
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
            {reviews}
          </div>
        </Drawer>
      </MuiThemeProvider>
    );
  }
}
