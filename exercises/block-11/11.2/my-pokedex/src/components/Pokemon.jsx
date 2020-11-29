import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends Component {
  render() {
    const { name, type, averageWeight: weight, image } = this.props.pokemon;
    return (
      <div className="pokemon">
        <h3>{name}</h3>
        <h4>{type}</h4>
        <p>{weight.value}{weight.measurementUnit}</p>
        <img src={image} alt={name} />
      </div>
    )
  }
};

Pokemon.propTypes = {
  name: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  weight: PropTypes.shape({
    value: PropTypes.number.isRequired,
    measurementUnit: PropTypes.string.isRequired,
  }),
  image: PropTypes.string.isRequired,
};
