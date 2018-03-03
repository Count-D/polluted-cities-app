import React, { Component } from 'react';
import Map from './components/map';
import AboutCity from './components/aboutCity';
import Video from './components/Video';
import Intro from './components/aboutSite';
import Solutions from './components/Solutions';
import Author from './components/Author';
import './css/App.css';


class App extends Component {

  render() {
 
    return (
      <div className="App">
        <Video />
        <Intro />
      <div className="container">
          <Map />
          <AboutCity /> 
          <Solutions /> 
      </div> 
          <Author/>                            
      </div>
    );
  }
}

export default App;
