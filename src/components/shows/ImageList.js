import React, { Component } from 'react'
import ImageCard from './ImageCard'

class ImageList extends Component{

  state = {
    artwork: ""
  }

  handleMouseOver = (event) => {
    const imageIdx = (parseInt(event.target.innerHTML, 10) - 1)
    const artwork = this.props.images[imageIdx]

    this.setState({artwork})
  }


  render(){
    console.log("in ImageList Render: ", this.state.artwork)
    const imageItems = this.props.imageIds.map((image, idx) => <li style={{display: "inline"}} onMouseOver={this.handleMouseOver}> | <strong> {idx + 1} </strong> | </li>)
    return(
      <div>
        <ul>
          {imageItems}
        </ul>
        <div>
          <ImageCard artwork={this.state.artwork}/>
        </div>
      </div>
    )
  }
}

export default ImageList
