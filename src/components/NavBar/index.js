import React, { Component } from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render(){
    return(
      <div className="Nav">
        <h1><Link exact to="/" style={{ textDecoration: 'none', color: 'black' }}>Cole Sayer</Link></h1>

      <ul>
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/shows">Shows</NavLink></li>
        <li><NavLink exact to="/">Home</NavLink></li>
      </ul>

      </div>
    )
  }
}

export default NavBar
