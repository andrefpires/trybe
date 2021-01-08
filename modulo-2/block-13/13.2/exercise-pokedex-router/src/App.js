import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import PokemonDetails from './PokemonDetails';
import Pokedex from './Pokedex';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <Pokedex pokemons={pokemons} />} />
      <Route path="/pokemons/:id" render={(props) => <PokemonDetails {...props} pokemons={pokemons} />}/>
    </BrowserRouter>
  );
}

export default App;
