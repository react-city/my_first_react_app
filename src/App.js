import React, { Component } from 'react';
import Header from './components/Header/Header';
import Pacman from './components/Pacman/Pacman';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Pacman />
      </div>
    );
  }
}

export default App;
