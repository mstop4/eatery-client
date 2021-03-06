import React/*, { Component }*/ from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import CircularProgress from 'material-ui/CircularProgress';
//import {GridList, GridTile} from 'material-ui/GridList'
import Badge from 'material-ui/Badge'
//import Image from 'react-image-resizer'
import FlatButton from 'material-ui/FlatButton';
import MapComponent from './MapComponent.jsx'
import DetailDrawer from './DetailDrawer.jsx'
import {Card, /*CardActions, CardHeader,*/ CardMedia, CardTitle, /*CardText*/} from 'material-ui/Card';

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

let g_foodJSON = []
let g_photos = []
let g_album = {}
let g_foodInfo = []

class RestaurantChoice extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      foodJSON: g_foodJSON,
      foodInfo: g_foodInfo,
      photos: g_photos,
      album: g_album,
      radius: 2000,
      rankBy: "distance",
      maxResults: 10,
      maxPrice: 4,

      open: false,
      load: false,
      details: {
        title: "",
        subtitle: "",
        photo: "",
        place_id: "",
        checked: "",
        rateId: 0
      }
    }

    this.map = null
    this.position = { lat: 43.6532, lng: -79.3832 }
  }

  getMoreDetails = (json, place, newAlbum, newInfo) => {
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
        newInfo[place] = json.result
        newAlbum[place].rateId = place

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

  getFood = (lat, lng, price) => {

      const type = "restaurant"
      this.setState({
        foodJSON: []
      })

      console.log(`http://${process.env.REACT_APP_SERVER_ADDR}:${process.env.REACT_APP_SERVER_PORT}/places?lat=${lat}&lng=${lng}&type=${type}&rankby=${this.state.rankBy}&maxprice=${price}`)

      fetch(`http://${process.env.REACT_APP_SERVER_ADDR}:${process.env.REACT_APP_SERVER_PORT}/places?lat=${lat}&lng=${lng}&type=${type}&rankby=${this.state.rankBy}&maxprice=${price}`, {
        mode: "cors"
      })
        .then((response) => {
          return response.json()
        })
        .then((json) => {

          let newPhotos = []
          let newAlbum = {}
          let newInfo = []
          let promises = []
          let n = 0

          for (let place in json.results) {
            if (json.results[place].photos) {
              newPhotos[place] = "https://maps.googleapis.com/maps/api/place/photo?"
              newPhotos[place] += `key=${process.env.REACT_APP_GOOGLEMAPS_APIKEY}&`
              newPhotos[place] += `photoreference=${json.results[place].photos[0].photo_reference}&`
              newPhotos[place] += "maxheight=400"
              promises.push(this.getMoreDetails(json, place, newAlbum, newInfo))
              if (++n >= this.state.maxResults) break
            } else {
              newPhotos[place] = ""
            }
          }

          Promise.all(promises)
          .then(() => {

            g_foodJSON = json
            g_foodInfo = newInfo
            g_photos = newPhotos
            g_album = newAlbum

            this.setState({
              foodJSON: json,
              foodInfo: newInfo,
              photos: newPhotos,
              album: newAlbum,
            })

            this.position = {lat: lat, lng: lng}

            this.props.updateCache(newAlbum, newInfo)
          })
          .catch((error) => {
            console.error(error)
          })
        })
        .catch((error) => {
          console.error(error)
        })
  }

  handleToggle = () => this.setState({ open: true })
  handleClose = () => this.setState({ open: false })
  handleDetails = (details) => this.setState({ details: details })

  handlePriceFilter = (price) => { 
    this.getFood(this.position.lat, this.position.lng, price) 
    this.setState({ maxPrice: price })
  }

  render = () => {
    const infos = [
      <div className="button-container">
      <MuiThemeProvider>
        <FlatButton label="$"
                    className="price-button"
                    onClick={() => {this.handlePriceFilter(1)}}
        />
      </MuiThemeProvider>
      <MuiThemeProvider>
        <FlatButton label="$$"
                    className="price-button"
                    onClick={() => {this.handlePriceFilter(2)}}
        />
      </MuiThemeProvider>
      <MuiThemeProvider>
        <FlatButton label="$$$"
                    className="price-button"
                    onClick={() => {this.handlePriceFilter(3)}}
        />
      </MuiThemeProvider>
      <MuiThemeProvider>
        <FlatButton label="$$$$"
                    className="price-button"
                    onClick={() => {this.handlePriceFilter(4)}}
        />
      </MuiThemeProvider>
      </div>,
    ]
    const places = this.state.foodJSON.results
    let gridComp
    let n = 0

    if (places) {
      for (let place in places) {

        // build grid tile
        let pic = this.state.photos[place]

        // ignore places with no photos
        if (!pic) {
          continue
        } else {

          infos.push(
            <MuiThemeProvider key= {place} muiTheme={muiTheme}>
              <Card className='card'
                    onClick={() => {
                      let detail = {
                        title: this.state.foodInfo[place]["name"],
                        subtitle: this.state.foodInfo[place]["vicinity"],
                        photos: this.state.album[place],
                        info: this.state.foodInfo[place],
                        rating: this.state.foodInfo[place]["rating"],
                        place_id: this.state.foodInfo[place]["place_id"],
                        rateId: this.state.album[place].rateId
                      }
                      this.setState({
                        details: detail,
                        position: places[place].geometry.location
                      })
                      this.position = places[place].geometry.location
                      this.handleToggle();
                    }}
              >
                <CardMedia >
                  <img className='card-image'src={pic} alt="" />
                </CardMedia>
                <Badge
                  badgeContent={n+1}
                  primary={true}
                  className ="badge"
                />
                <CardTitle title={places[place]["name"]} subtitle={places[place]["vicinity"]} className="card-title"/>
              </Card>
            </MuiThemeProvider>

          )
          if (++n >= this.state.maxResults) break
        }
      }

      gridComp = infos
    } else {
      gridComp = <MuiThemeProvider muiTheme={muiTheme}>
                  <CircularProgress size="175"
                                 thickness="30"
                                 className="progress"
                    />
                  </MuiThemeProvider>
    }

    return (
      <div>
        <table width={"100%"} height={"100vh"}>
          <tr>
            <td width={"60%"} height={"100%"}>

              <MapComponent ref="mapComp"
                className="map"
                data={this.state.foodJSON.results}
                center={this.position}
                radius={this.state.radius}
                getFood={this.getFood}
                maxResults={this.state.maxResults}
                assignMap={this.assignMap}
                maxPrice={this.state.maxPrice}
              />
            </td>
            <td width={"40%"} height={"100%"} className="card-container">
              {gridComp}
            </td>
          </tr>
        </table>
        <DetailDrawer
          open={this.state.open}
          detail={this.state.details}
          request={open => this.setState({ open })}
          currentEmail={this.props.currentEmail}
        />
      </div>
    )
  }
}

export default RestaurantChoice;