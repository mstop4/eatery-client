import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import ReactDOM from 'react-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import Image from 'react-image-resizer';

class RestaurantChoice extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      foodJSON: [],
      photos: []
    }
  }

  componentDidMount() {
    this.getFood()
  }

  getFood() {
    fetch("http://localhost:3000/places", {
      mode: "cors",
    })
      .then((response) => {
        return response.json()
      })
      .then((json) => {

        let newPhotos = [];



        for (let place in json.results) {

          if (json.results[place].photos) {
            newPhotos[place] = "https://maps.googleapis.com/maps/api/place/photo?"
            newPhotos[place] += `key=${process.env.REACT_APP_GOOGLEMAPS_APIKEY}&`
            newPhotos[place] += `photoreference=${json.results[place].photos[0].photo_reference}&`
            newPhotos[place] += "maxheight=400"
          } else {
            newPhotos[place] = ""
          }
        }

        this.setState({ foodJSON: json, photos: newPhotos })
        console.log(newPhotos)

      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    const infos = []
    const places = this.state.foodJSON.results

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
    }

    return (
      <div>
      <h2>Nearby Places</h2>
        <MuiThemeProvider>
          <GridList cols={4}>
            {infos}
          </GridList>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default RestaurantChoice;