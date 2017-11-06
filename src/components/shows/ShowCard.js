import React, { Component } from 'react'
import ImageList from './ImageList'

class ShowCard extends Component{



  render(){
    const textArray = this.props.show.text.split("\n")
    const formattedShowText = textArray.map((text, idx) => <p key={idx}>{text}</p>)

    // const imageItems = this.props.show.images.map((image, idx) => <img src={require(`${image}`)} alt={idx} />)
    // <div>
    //   {imageItems}
    // </div>

    return(
      <div>
        <h1>{this.props.show.title}</h1>
        <h3>{this.props.show.location} - {this.props.show.date}</h3>
        {formattedShowText}
        <div>
          <ImageList images={this.props.show.images}/>
        </div>
      </div>
    )
  }
}

export default ShowCard
