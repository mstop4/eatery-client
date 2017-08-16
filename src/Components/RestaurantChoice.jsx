import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import {GridList, GridTile} from 'material-ui/GridList'
import Image from 'react-image-resizer'
import MapComponent from './MapComponent.jsx'
import DetailDrawer from './DetailDrawer.jsx'

let g_foodJSON = []
let g_photos = []
let g_position = { lat: 43.64518819999999, lng: -79.39392040000001 }

class RestaurantChoice extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      foodJSON: g_foodJSON,
      photos: g_photos,
      position: g_position,
      radius: 200,
      maxResults: 12,

      open: false,
      load: false,
      details: {
        title: "",
        subtitle: "",
        photo: ""
      }
    }
  }

  getFood = (lat, lng) => {

    if (this.state.foodJSON.length === 0 || this.state.photos.length === 0) {
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

          g_foodJSON = json
          g_photos = newPhotos
          g_position = {lat: lat, lng: lng}
          this.setState({ foodJSON: json, photos: newPhotos, position: { lat: lat, lng: lng } })

        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  handleToggle = () => this.setState({ open: true })
  handleClose = () => this.setState({ open: false })
  handleDetails = (details) => this.setState({ details: details })

  render = () => {
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
          onClick={() => {
              let detail = {
                title: places[place]["name"],
                subtitle: places[place]["vicinity"],
                photo: this.state.photos[place]
              }
              this.setState({details: detail}, function () {
                //console.log(this.state.details)
              })
              //console.log(this.state.details)
              this.handleToggle();

            {/* this.setState({details:details}) */}
            {/* this.handleToggle(details) */}
          }}
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
<div>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>

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
        <DetailDrawer
          open={this.state.open}
          detail={this.state.details}
          request={open => this.setState({ open })}
        />
      </div>
    )
  }
}

export default RestaurantChoice;