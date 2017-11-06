import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {
  render(){
    return(
      <div className="Nav">
        <h1> Cole Sayer </h1>

      <ul>
        <li>News</li>
        <li>Contact</li>
        <li>Home</li>
      </ul>

      </div>
    )
  }
}

export default NavBar
