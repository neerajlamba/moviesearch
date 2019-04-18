import React, { Component } from 'react';
import './App.css';
import MovieSearch from './components/movieSearch';

class App extends Component {
  render() {
    return (
      <div id="App">
        <h2 style={{textAlign : 'center'}}>Movie Search App</h2>
        <MovieSearch />
      </div>
    );
  }
}

export default App;
