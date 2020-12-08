import React from 'react';
import './App.css';
import Header from './components/Header';
import movies from './data.js';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
