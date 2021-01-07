import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" render={() => <Pokedex pokemons={pokemons} />} />
    </BrowserRouter>
  );
}

export default App;
