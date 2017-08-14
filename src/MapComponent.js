import React from 'react';
//import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';

const coords = {
  lat: 43.6451095,
  lng: -79.3947592
};

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

    const markers = []

    for (var i = 0; i <= 360; i+=36) {
      markers.push(<Marker
          key={i}
          lat={coords.lat + Math.cos(i) * 0.001}
          lng={coords.lng + Math.sin(i) * 0.001}
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

        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'I know the MEN stack. :)'}
          onCloseClick={this.onCloseClick} />

      </Gmaps>
    );
  }
};

export default MapComponent;