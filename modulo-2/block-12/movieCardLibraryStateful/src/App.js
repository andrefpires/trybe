import React from 'react';
import movies from './data';
import './App.css';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
