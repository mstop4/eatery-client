import React from 'react';
//import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';

const params = {v: '3.exp', key: process.env.REACT_APP_GOOGLEMAPS_APIKEY, libraries: "places"};

class MapComponent extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {
  }

  onMapCreated(map) {
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

      if (++n >= 10) break
    }

    return (
      <Gmaps
        width={'50%'}
        height={'600px'}
        lat={this.props.center.lat}
        lng={this.props.center.lng}
        zoom={17}
        zoomControl={true}
        draggable = {false}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>

        {markers
        }

        {//infos
        }

      </Gmaps>
    );
  }
};

export default MapComponent;