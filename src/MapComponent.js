import React from 'react';
//import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';

const coords = {
  lat: 43.6451095,
  lng: -79.3947592
};

const labels = "ABCDEFGHIJKL";

const params = {v: '3.exp', key: process.env.REACT_APP_GOOGLEMAPS_APIKEY};

class MapComponent extends React.Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
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

    let food = {};

    for (var i = 0; i < 12; i++) {
      food[i] = {
        id: i,
        lat: coords.lat + Math.random()*0.002 - 0.001,
        lng: coords.lng + Math.random()*0.002 - 0.001,
        label: labels[i]
      }
    }

    let markers = []

    for (let f in food) {
      markers.push(<Marker
          key={food[f].id}
          lat={food[f].lat}
          lng={food[f].lng}
          label={food[f].label}
          draggable={true}
          onDragEnd={this.onDragEnd} />
      )
    }

    return (
      <Gmaps
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={17}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>

        {markers}

      </Gmaps>
    );
  }
};

export default MapComponent;