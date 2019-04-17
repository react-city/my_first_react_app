import React, { Component } from 'react';
import Header from './components/Header/Header';
import Animation from './components/Animation/Animation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Animation />
      </div>
    );
  }
}

export default App;
