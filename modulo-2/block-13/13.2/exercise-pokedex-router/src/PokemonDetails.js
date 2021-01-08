import React, { Component } from 'react';

// Me basiei na função do gabarito para fazer após inúmeras
// tentativas sem sucesso tentando uma função com manipuladores
// de elementos dentro do render do componente
const renderLocations = (param) => { 
  return (
    param.map(({ location, map }) => (
      <div>
        <p>{location}</p>
        <img src={map} alt={location}/>
      </div>
    ))
  )
};

export default class PokemonsDetails extends Component {
  render() {
    const { pokemons } = this.props;
    const id  = parseFloat(this.props.match.params.id);
    const pokemonDetails = pokemons.find((pokemon) => pokemon.id === id);
    const { name, type, averageWeight, summary, image, foundAt } = pokemonDetails;

    return (
      <div id="pokemonDetails">
        <div>
        <h2>{name}</h2>
        <p>{type}</p>
        <p>{`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        <img src={image} alt={name} />
        <p>{summary}</p>
        <div>
          <h3>Pode ser encontrado em:</h3>
          <div className="locations">
            {renderLocations(foundAt)}
          </div>
        </div>
        </div>
      </div>
    )
  }
}
