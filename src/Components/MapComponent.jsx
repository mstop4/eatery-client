import React from 'react';
//import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const params = {v: '3.exp', key: process.env.REACT_APP_GOOGLEMAPS_APIKEY, libraries: "places"};

class MapComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}

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

    const markers = []
    const infos = []

    const places = this.props.data
    let n = 0

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

      if (++n >= this.props.maxResults) break
    }

    const circle = <Circle
        lat={this.props.center.lat}
        lng={this.props.center.lng}
        radius={this.props.radius}
        strokeColor={'#00BCD4'}
        strokeOpacity={0.3}
        strokeWeight={2}
        fillColor={'#00BCD4'}
        fillOpacity={0.15}
        />

    return (
      <Gmaps
        width={'100%'}
        height={'600px'}
        lat={this.props.center.lat}
        lng={this.props.center.lng}
        zoom={17}
        zoomControl={true}
        gestureHandling={'cooperative'}
        loadingMessage={'Eatery'}
        params={params}
        onMapCreated={this.onMapCreated}>

        {markers}

        {circle}

      </Gmaps>
    );
  }
};

export default MapComponent;