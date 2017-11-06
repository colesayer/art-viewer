 import React, { Component } from 'react';
import { fetchShowInfo } from '../../Services/showinfo'
import ShowList from './ShowList'
import ShowForm from './ShowForm'
import './ShowContainer.css'


class ShowContainer extends Component{

  state = {
    shows: []
  }

  componentDidMount(){
    this.setState({
      shows: fetchShowInfo(),
      searchError: "",
    })
  }

  setShows = () => this.setState({shows: fetchShowInfo()})

  handleSubmit = (event) => {
    const shows = this.state.shows
    this.setState({searchError: ""})
    let showArray = []

    for(const ele of shows){
      if(ele.title.toLowerCase() === event.toLowerCase()){
        showArray[0] = ele
      } else {
        this.setState({searchError: "Not an existing show."})
      }

      if(showArray.length >= 1){
        this.setState({shows: showArray, searchError: ""})
      }

    }
  }

  render(){
    console.log("in render: ", this.state.shows)
    return(
      <div>
        <ShowList shows={this.state.shows} />
        <ShowForm resetValue={this.setShows} searchShows={this.handleSubmit} searchError={this.state.searchError}/>
      </div>
    )
  }
}

export default ShowContainer
