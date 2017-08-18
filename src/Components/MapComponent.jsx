import React from 'react';
//import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const params = {v: '3.exp', key: process.env.REACT_APP_GOOGLEMAPS_APIKEY, libraries: "places"};

class MapComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      map: null
    }

    this.onMapCreated = this.onMapCreated.bind(this)
  }

  componentDidMount() {
  }

  onMapCreated(map) {
    this.setState({map: map})

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {

        map.panTo({lat: position.coords.latitude, lng: position.coords.longitude})
        this.props.getFood(position.coords.latitude, position.coords.longitude)
      })
    }
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {

    console.log(this.state.map)

    const markers = []
    const infos = []
    let message
    let circle
    let bounds = null
    const places = this.props.data
    let n = 0

    // create a new bounds object only if map is set up
    if (this.state.map) {
      bounds = new window.google.maps.LatLngBounds(null)
      console.dir(bounds)
    }

    if (places && places.length > 0) {

      for (let place in places) {
        markers.push(<Marker
            key={place}
            lat={places[place]["geometry"]["location"].lat}
            lng={places[place]["geometry"]["location"].lng}
            //draggable={true}
            //onDragEnd={this.onDragEnd}
            />
        )

        infos.push(<InfoWindow
            key={place}
            lat={places[place]["geometry"]["location"].lat}
            lng={places[place]["geometry"]["location"].lng}
            content={places[place]["name"]}
            onCloseClick={this.onCloseClick} />
          )

        // update bounds only if map is set up
        if (bounds) {
          console.dir({
            lat: places[place]["geometry"]["location"].lat,
            lng: places[place]["geometry"]["location"].lng
          })
          bounds.extend({
            lat: places[place]["geometry"]["location"].lat,
            lng: places[place]["geometry"]["location"].lng
          })
          console.dir(bounds)
        }

        if (++n >= this.props.maxResults) break
      }

      // pan to bounds only if bounds exist

      if (bounds) {
        console.dir(bounds)
        this.state.map.panToBounds(bounds)
      }

      circle = <Circle
          lat={this.props.center.lat}
          lng={this.props.center.lng}
          radius={this.props.radius}
          strokeColor={'#00BCD4'}
          strokeOpacity={0.3}
          strokeWeight={2}
          fillColor={'#00BCD4'}
          fillOpacity={0.15}
          />
    }

    return (
      <div>
        {message}

        <Gmaps
          width={'100%'}
          height={'525px'}
          lat={this.props.center.lat}
          lng={this.props.center.lng}
          zoom={17}
          zoomControl={true}
          gestureHandling={'cooperative'}
          loadingMessage={'Eatery'}
          params={params}
          onMapCreated={this.onMapCreated}>

          {markers}

          {//circle
          }

        </Gmaps>
      </div>
    );
  }
};

export default MapComponent;