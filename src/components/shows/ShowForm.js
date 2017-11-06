import React, { Component } from 'react'

class ShowForm extends Component{

  state = {
    input: ""
  }

  handleChange = (event) => {
    this.props.resetValue()
    this.setState({input: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.searchShows(this.state.input)
    this.setState({input: ""})
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.input} />
        <input type="submit" value="Search Shows"/>
      </form>
    )
  }
}

export default ShowForm
