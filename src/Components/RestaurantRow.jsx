import React, { Component } from 'react';

class RestaurantRow extends React.Component {

  render() {

    return(
      <tr>
        <td><img src={this.props.icon} width="32px"/></td>
        <td>{this.props.name}</td>
        <td>{this.props.rating}</td>
        <td>{this.props.price}</td>
        <td>{this.props.vicinity}</td>
        <td>{this.props.photo}</td>
      </tr>
    )
  }
}

export default RestaurantRow