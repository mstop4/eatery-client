import React, { Component } from 'react';

class RestaurantRow extends React.Component {

  render() {
    console.dir(this.props)
    return(
      <tr>
        <td><img src={this.props.icon}/></td>
        <td>{this.props.name}</td>
        <td>{this.props.rating}</td>
        <td>{this.props.vicinity}</td>
      </tr>
    )
  }
}

export default RestaurantRow