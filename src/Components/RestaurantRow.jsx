import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Image from 'react-image-resizer';

class RestaurantRow extends React.Component {

  render() {

      {/*<tr>
        <td><img src={this.props.icon} width="32px"/></td>
        <td>{this.props.name}</td>
        <td>{this.props.rating}</td>
        <td>{this.props.price}</td>
        <td>{this.props.vicinity}</td>
        <td><img src={this.props.photo}/></td>
      </tr>*/}

    return(
      <GridTile
        key={this.props.key}
        title={this.props.name}
        subtitle={this.props.vicinity}
      >
        <Image
          src={this.props.photo}
          height = {400}
          width = {400}
        />
      </GridTile>
    )
  }
}

export default RestaurantRow