import React, { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data';

export default class Pokedex extends Component {
  render() {
    const allPokemonsInformations = pokemons.map((element) => <Pokemon key={element.name} pokemon={element} />)
    return (
      <div className="pokedex">
        { allPokemonsInformations }
      </div>
    )
  }
}
