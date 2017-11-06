import React, { Component } from 'react'
import ShowCard from './ShowCard'

class ShowList extends Component{

  state = {
    show: []
  }

  handleClick = (event) => {
    const showTitle = event.target.innerHTML.trim()
    const show = this.props.shows.filter(show => show.title === showTitle)

    this.setState({
      show
    })
  }


  render(){
    console.log("in ShowList render:", this.state.show)

    const showItems = this.state.show.map((show,idx) => <ShowCard key={idx} show={show}/>)

    const showList = this.props.shows.map((show, idx) => {
      return <li onClick={this.handleClick} key={idx}> {show.title} </li>
    })



    return(
      <div>
        <ul style={{listStyle: 'none', textAlign: "left", display: "inline"}}>
          {showList}
        </ul>
        {showItems}
      </div>
    )
  }
}

export default ShowList
