import React, { Component } from 'react';
import request from 'request';

class Fetch extends Component {

  constructor(props){
    super(props)
    this.state = {
      foodJSON: "A",
      fooded: false
    }
  }

  componentDidMount() {
    this.getFood()
  }

  getFood() {
    fetch("http://localhost:3000/map", {
      mode: "cors",
    })
      .then((response) => {
        return response.json()
      })
      .then((json) => {

        this.setState({ foodJSON: json })

        console.log(this.state["foodJSON"])

        if (!this.state["fooded"]) {
          //this.forcepdate()
          this.setState({fooded: true})
        }

      })
      .catch((error) => {
        console.error(error)
      })
  }

  render(){

    return (<p>{JSON.stringify(this.state["foodJSON"])}</p>)
  }
}

export default Fetch;