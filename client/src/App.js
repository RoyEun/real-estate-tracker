import React, { Component } from 'react';

import Navbar from './containers/Header/Navbar';
import Main from './containers/Main';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
