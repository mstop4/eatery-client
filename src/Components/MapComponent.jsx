import React from 'react';
//import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import {red500} from 'material-ui/styles/colors';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const params = {v: '3.exp', key: process.env.REACT_APP_GOOGLEMAPS_APIKEY, libraries: "places"};

// const size = {width: 24, height: 24}
// const mapicons = [
//   { url: "http://maps.google.com/mapfiles/kml/pal5/icon56.png", scaledSize: size },
//   { url: "http://maps.google.com/mapfiles/kml/pal5/icon57.png", scaledSize: size },
//   { url: "http://maps.google.com/mapfiles/kml/pal5/icon58.png", scaledSize: size },
//   { url: "http://maps.google.com/mapfiles/kml/pal5/icon59.png", scaledSize: size },
//   { url: "http://maps.google.com/mapfiles/kml/pal5/icon60.png", scaledSize: size },
//   { url: "http://maps.google.com/mapfiles/kml/pal5/icon61.png", scaledSize: size },
//   { url: "http://maps.google.com/mapfiles/kml/pal5/icon62.png", scaledSize: size },
//   { url: "http://maps.google.com/mapfiles/kml/pal5/icon63.png", scaledSize: size },
//   { url: "http://maps.google.com/mapfiles/kml/pal5/icon32.png", scaledSize: size },
//   { url: "http://maps.google.com/mapfiles/kml/pal5/icon33.png", scaledSize: size },
//   { url: "http://maps.google.com/mapfiles/kml/pal5/icon34.png", scaledSize: size },
//   { url: "http://maps.google.com/mapfiles/kml/pal5/icon35.png", scaledSize: size },
// ]

const labels = "ABCDEFGHIJKL"
let labelIndex = 0;

const svgIcon = {
  path: "M-16,0a16,16 0 1,0 32,0a16,16 0 1,0 -32,0",
  fillColor: red500,
  fillOpacity: 1,
  strokeWeight: 0,
  scale: 0.75
}

const defaultStyle = {
            featureType: 'poi',
            stylers: [{visibility: 'off'}]
          }

class MapComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      map: null
    }

    this.onMapCreated = this.onMapCreated.bind(this)
  }

  componentDidUpdate() {

    // create a new bounds object only if map is set up
    if (this.state.map) {
      let bounds = new window.google.maps.LatLngBounds(null)

      // update bounds only if map is set up

      const places = this.props.data
      let n = 0

      for (let place in places) {
        if (bounds) {
          bounds.extend({
            lat: places[place]["geometry"]["location"].lat,
            lng: places[place]["geometry"]["location"].lng
          })
        }

        if (++n >= this.props.maxResults) break
      }

      this.state.map.panToBounds(bounds)
      this.state.map.fitBounds(bounds)
    }
  }

  onMapCreated(map) {
    this.setState({map: map})

    map.setOptions({style: defaultStyle})

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

    const markers = []
    const infos = []
    let message
    let circle
    const places = this.props.data
    let n = 0

    if (places && places.length > 0) {

      for (let place in places) {

        let pic = places[place]["photos"]
        if (!pic) {
          continue
        } else {
          markers.push(<Marker
              key={place}
              lat={places[place]["geometry"]["location"].lat}
              lng={places[place]["geometry"]["location"].lng}
              icon={svgIcon}//{mapicons[place]}
              label={{
                  text: labels[labelIndex++ % labels.length],
                  color: "white",
                  fontFamily: "sans-serif"
                }}
              />
            )
        }

        // infos.push(<InfoWindow
        //     key={place}
        //     lat={places[place]["geometry"]["location"].lat}
        //     lng={places[place]["geometry"]["location"].lng}
        //     content={places[place]["name"]}
        //     onCloseClick={this.onCloseClick} />
        //   )

        if (++n >= this.props.maxResults) break
      }

      // circle = <Circle
      //     lat={this.props.center.lat}
      //     lng={this.props.center.lng}
      //     radius={this.props.radius}
      //     strokeColor={'#00BCD4'}
      //     strokeOpacity={0.3}
      //     strokeWeight={2}
      //     fillColor={'#00BCD4'}
      //     fillOpacity={0.15}
      //     />
    }

    return (
      <div>
        {message}

        <Gmaps
          width={'100%'}
          height={'100%'}
          lat={this.props.center.lat}
          lng={this.props.center.lng}
          zoom={10}
          zoomControl={true}
          mapTypeControl={false}
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