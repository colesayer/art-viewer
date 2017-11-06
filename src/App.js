import React, { Component } from 'react';
import './App.css';
import ShowContainer from './components/shows/ShowContainer'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ShowContainer />
      </div>
    );
  }
}

export default App;
