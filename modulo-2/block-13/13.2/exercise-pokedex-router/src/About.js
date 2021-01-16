import React, { Component } from 'react';

export default class about extends Component {
  render() {
    return (
      <div id="about">
        <h2>Pokédex</h2>
        <p>
          A Pokédex (em japonês:ポ ケ モ ン図 鑑 enciclopédia Pokémon ilustrada ) é uma
          enciclopédia digital criada pelo Professor Oak como uma ferramenta inestimável
          para treinadores no mundo Pokémon . Ele fornece informações sobre todos os
          Pokémon do mundo que estão contidos em seu banco de dados, embora difira na
          forma como adquire e apresenta as informações nas diferentes mídias. No entanto,
          eles também são dados apenas a alguns treinadores de cada vez, geralmente aqueles
          que são considerados como tendo habilidades e potencial excepcionais. Pokédexes
          regionais fornecem informações sobre Pokémon nativos de sua região específica,
          enquanto os Pokédex nacionais registra informações sobre todos os Pokémon
          conhecidos.
        </p>
        <img
          src='https://cdn.bulbagarden.net/upload/3/36/479Rotom-Pok%C3%A9dex.png'
          alt='pokedéx'
          width='700'
        />
        <p><strong>Fonte:</strong> https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex</p>
      </div>
    )
  }
}