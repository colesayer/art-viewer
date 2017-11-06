import React, { Component } from 'react';
import { fetchShowInfo } from '../../services/showinfo'
import ShowList from './ShowList'
import ShowForm from './ShowForm'
import './ShowContainer.css'


class ShowContainer extends Component{

  state = {
    shows: []
  }

  componentDidMount(){
    this.setState({
      shows: fetchShowInfo()
    })
  }

  setShows = () => this.setState({shows: fetchShowInfo()})

  handleSubmit = (event) => {
    const shows = this.state.shows
    let showArray = []

    for(const ele of shows){
      if(ele.title.toLowerCase() === event.toLowerCase()){
        showArray[0] = ele
        console.log("in for", showArray)
      }

      if(showArray.length >= 1){
        this.setState({shows: showArray})
      }

    }
  }

  render(){
    console.log("in render: ", this.state.shows)
    return(
      <div>
        <ShowForm resetValue={this.setShows} searchShows={this.handleSubmit}/>
        <ShowList shows={this.state.shows} />
      </div>
    )
  }
}

export default ShowContainer
