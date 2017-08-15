import React from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import FavoriteButton from "./FavoriteButton.jsx";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

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
    return (
      <MuiThemeProvider>
        <Drawer
          docked={false}
          width={1000}
          open={this.props.open}
          onRequestChange={this.props.request}
        >
          <h1> {this.state.details.title} </h1>
          <div>
            <img
              src="https://s3.amazonaws.com/academiadacarne/content/3331-picanha-com-farofa-e-vinagrete-html.jpg"
              height="500"
              width="600"
            />
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in
            bibendum tortor, id placerat ex. Pellentesque augue quam, iaculis id
            ligula a, rutrum placerat lectus. Maecenas venenatis nibh vitae
            euismod pharetra. In a ex at justo aliquet imperdiet in a nibh. Sed
            blandit id metus quis malesuada. Curabitur in velit lectus. Ut elit
            odio, auctor dignissim volutpat eget, placerat bibendum nisi.
            Curabitur imperdiet urna eu ipsum pretium, in tincidunt tellus
            commodo. Ut tempor laoreet arcu, nec tristique purus congue ut.
            Quisque sit amet auctor erat
            <FavoriteButton />
          </div>
          <div>
            <ul class="contact-us-list">
              <li class="address">{this.state.details.subtitle}</li>
              <li class="email">
                <a href="mailto:">hello@yeticave.com</a>
              </li>
              <li class="phone">1 (408) 445 9978</li>
            </ul>
          </div>
        </Drawer>
      </MuiThemeProvider>
    );
  }
}
