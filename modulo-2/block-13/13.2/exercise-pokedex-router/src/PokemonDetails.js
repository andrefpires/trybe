import React, { Component } from 'react';

export default class PokemonsDetails extends Component {
  render() {
    const { pokemons } = this.props;
    const id  = parseFloat(this.props.match.params.id);
    const pokemonDetails = pokemons.find((pokemon) => pokemon.id === id);
    const { name, type, averageWeight, summary, image, foundAt } = pokemonDetails;
    return (
      <div className="pokemonDetails">
        <div>
          <h2>{name}</h2>
          <p>{type}</p>
          <img src={image}/>
          <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
          <p>{summary}</p>
          <div className="locations">
            <h3>Pode ser encontrado em:</h3>
            <div className="location">
              <p>{foundAt[0].location}</p>
              <img src={foundAt[0].map}/>
            </div>
            <div className="location">
              <p>{foundAt[1].location}</p>
              <img src={foundAt[1].map}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
