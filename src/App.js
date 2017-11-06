import React, { Component } from 'react';
import './App.css';
import ShowContainer from './Components/Shows/ShowContainer'
import ContactContainer from './Components/Contact/ContactContainer'
import NewsContainer from './Components/News/NewsContainer'
import NavBar from './Components/NavBar'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/shows" component={ShowContainer}/>
        <Route exact path="/contact" component={ContactContainer}/>
        <Route exact path="/news" component={NewsContainer}/>
      </div>
    );
  }
}

export default App;
