import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import CircularProgress from 'material-ui/CircularProgress';
import {GridList, GridTile} from 'material-ui/GridList'
import Image from 'react-image-resizer'
import MapComponent from './MapComponent.jsx'
import DetailDrawer from './DetailDrawer.jsx'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red500} from 'material-ui/styles/colors';
import '../css/restaurantchoice.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500,
  },
  progress: {
    marginLeft: '50%'
  }
});

const labels = "ABCDEFGHIJKL"

let g_foodJSON = []
let g_photos = []
let g_album = {}
let g_position = { lat: 43.6532, lng: -79.3832 }

class RestaurantChoice extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      foodJSON: g_foodJSON,
      photos: g_photos,
      album: g_album,
      position: g_position,
      radius: 2000,
      rankBy: "distance",
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

  getMoreDetails = (json, place, newAlbum) => {
    // get more details

    let place_id = json.results[place].place_id;
    newAlbum[place] = []

    return new Promise ((resolve, reject) => {
      fetch(`http://${process.env.REACT_APP_SERVER_ADDR}:${process.env.REACT_APP_SERVER_PORT}/details?placeid=${place_id}`, {
        mode: "cors"
      })
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        for (let photo in json.result.photos) {
          newAlbum[place][photo] = "https://maps.googleapis.com/maps/api/place/photo?"
          newAlbum[place][photo] += `key=${process.env.REACT_APP_GOOGLEMAPS_APIKEY}&`
          newAlbum[place][photo] += `photoreference=${json.result.photos[photo].photo_reference}&`
          newAlbum[place][photo] += "maxheight=400"
        }
        resolve()
      })
      .catch((error) => {
        console.error(error)
        reject(error)
      })
    })
  }

  getFood = (lat, lng) => {
    if (this.state.foodJSON.length === 0 || this.state.photos.length === 0) {

      const type = "restaurant"

      fetch(`http://${process.env.REACT_APP_SERVER_ADDR}:${process.env.REACT_APP_SERVER_PORT}/places?lat=${lat}&lng=${lng}&type=${type}&rankby=${this.state.rankBy}`, {
        mode: "cors"
      })
        .then((response) => {
          return response.json()
        })
        .then((json) => {

          let newPhotos = []
          let newAlbum = {}
          let promises = []
          let n = 0

          for (let place in json.results) {
            if (json.results[place].photos) {
              newPhotos[place] = "https://maps.googleapis.com/maps/api/place/photo?"
              newPhotos[place] += `key=${process.env.REACT_APP_GOOGLEMAPS_APIKEY}&`
              newPhotos[place] += `photoreference=${json.results[place].photos[0].photo_reference}&`
              newPhotos[place] += "maxheight=400"
              promises.push(this.getMoreDetails(json, place, newAlbum))
              if (++n >= this.state.maxResults) break
            } else {
              newPhotos[place] = ""
            }
          }

          Promise.all(promises)
          .then(() => {

            g_foodJSON = json
            g_photos = newPhotos
            g_position = {lat: lat, lng: lng}
            g_album = newAlbum

            this.setState({
              foodJSON: json,
              photos: newPhotos,
              album: newAlbum,
              position: { lat: lat, lng: lng }
            })

            this.props.updateCache(newAlbum)
          })
          .catch((error) => {
            console.error(error)
          })
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
    const arnold = []
    const places = this.state.foodJSON.results
    let gridComp
    let n = 0

    if (places) {
      for (let place in places) {

        // build grid tile
        let pic = this.state.photos[place]

        // ignore places with no photos
        if (!pic) {
          console.log("ignore", n)
          continue
        } else {
          console.log("push", n)
          infos.push(
            <GridTile
              key={place}
              title={places[place]["name"]}
              subtitle={labels[n]}
            >
              <Image
                src={pic}
                height = {300}
              />
            </GridTile>
          )
          arnold.push(
            <MuiThemeProvider muiTheme={muiTheme}>
              <Card className='card'
                    onClick={() => {
                        let detail = {
                          title: places[place]["name"],
                          subtitle: places[place]["vicinity"],
                          photos: this.state.album[place],
                          rating: places[place]["rating"]
                        }
                        this.setState({details: detail}, function () {
                        })
                      this.handleToggle();
                    }}
              >
                <CardMedia >
                  <img className='card-image'src={pic} alt="" />
                </CardMedia>
                <CardTitle title={places[place]["name"]} subtitle={places[place]["vicinity"]} />
              </Card>
            </MuiThemeProvider>

          )
          if (++n >= this.state.maxResults) break
        }
      }

      gridComp =  <GridList cols={4}>
                    {infos}
                  </GridList>

    } else {
      gridComp = <CircularProgress size="175"
                                   thickness="30"
                                   className="progress"
      />
    }

    return (
      <div>
        <table width={"100%"} height={"100%"}>
          <tr>
            <td width={"50%"} height={"100%"}>
              <MapComponent
                className="map"
                data={this.state.foodJSON.results}
                center={this.state.position}
                radius={this.state.radius}
                getFood={this.getFood}
                maxResults={this.state.maxResults}
              />
            </td>
            <td width={"50%"} height={"100%"} className="card-container">
              {arnold}
            </td>
          </tr>
        </table>
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