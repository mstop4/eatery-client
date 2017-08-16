import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import ReactDOM from 'react-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import Image from 'react-image-resizer';
import MapComponent from './MapComponent.jsx'

class RestaurantChoice extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      foodJSON: [],
      photos: [],
      position: {
        lat: 43.64518819999999,
        lng: -79.39392040000001
      },
      radius: 200,
      maxResults: 12
    }

    this.getFood = this.getFood.bind(this)
  }

  componentDidMount() {
  }

  getFood(lat, lng) {
    fetch(`http://localhost:3000/places?lat=${lat}&lng=${lng}&radius=${this.state.radius}`, {
      mode: "cors",
    })
      .then((response) => {
        return response.json()
      })
      .then((json) => {

        let newPhotos = []
        let n = 0

        for (let place in json.results) {

          if (json.results[place].photos) {
            newPhotos[place] = "https://maps.googleapis.com/maps/api/place/photo?"
            newPhotos[place] += `key=${process.env.REACT_APP_GOOGLEMAPS_APIKEY}&`
            newPhotos[place] += `photoreference=${json.results[place].photos[0].photo_reference}&`
            newPhotos[place] += "maxheight=400"
          } else {
            newPhotos[place] = ""
          }

          if (++n >= this.state.maxResults) break
        }

        this.setState({ foodJSON: json, photos: newPhotos, position: { lat: lat, lng: lng } })

      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    const infos = []
    const places = this.state.foodJSON.results
    let n = 0

    for (let place in places) {

      let pic = this.state.photos[place]

      infos.push(
        <GridTile
          key={place}
          title={places[place]["name"]}
          subtitle={places[place]["vicinity"]}
          onClick={() => {alert("Click")}}
        >
          <Image
            src={pic}
            height = {300}
          />
        </GridTile>
      )

      if (++n >= this.state.maxResults) break
    }

    return (
      <div>
      <h2>Nearby Places</h2>
        <MuiThemeProvider>
          <GridList cols={4}>
            {infos}
          </GridList>
        </MuiThemeProvider>
        <MapComponent
          data={this.state.foodJSON.results}
          center={this.state.position}
          radius={this.state.radius}
          getFood={this.getFood}
          maxResults={this.state.maxResults}
        />
      </div>
    )
  }
}

export default RestaurantChoice;