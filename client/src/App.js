import React, { Component } from 'react';
import './App.css';
import LMS from './LMS.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <i className="App-logo fas fa-code fa-10x"></i>
          <p>
          <h2><i className="fas fa-chevron-left"></i><b>/CLOSING TAG</b><i className="fas fa-chevron-right"></i></h2>
          </p>
          <h4>LMS Productions</h4>
          <img id="LMStack" src={LMS} alt="Lick My Stack"/>
        </header>
      </div>
    );
  }
}

export default App;
