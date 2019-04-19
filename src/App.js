import React, { Component } from 'react';
import Header from './components/Header/Header';
import Pacman from './components/Pacman/Pacman';
import AviaSales from './components/AviaSales/AviaSales';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Pacman />
        <AviaSales />
      </div>
    );
  }
}

export default App;
