import React, { Component } from 'react'

class ImageCard extends Component{
  render(){
    console.log("In ImageCart :", typeof this.props.artwork)
    // const artwork = <img src={require(this.props.artwork)} />
    return(
      <div>
        {this.props.artwork}
      </div>
    )
  }
}

export default ImageCard

// <img src={require(`${artwork}`)} />
