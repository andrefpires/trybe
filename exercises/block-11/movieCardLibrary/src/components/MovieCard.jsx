import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const movie = this.props.movie;
    return (
      <div className="movie-card">
        <img src={movie.imagePath} alt={movie.title} className="movie-card-image" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{movie.title}</h4>
          <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
          <p className="movie-card-storyline">{movie.storyline}</p>
        </div>
        <Rating rating={movie.rating} />
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.objectOf.isRequired };

export default MovieCard; 
// teste