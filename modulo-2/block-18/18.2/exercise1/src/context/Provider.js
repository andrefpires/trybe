// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider(props) {
  const [ cars, setCars ] = useState({ redCar: false, blueCar: false, yellowCar: false });

  const moveCar = (car, side) => {
    setCars({ ...cars, [car]: side })
  };

  return (
    <CarsContext.Provider value={{ cars, moveCar }}>
      {props.children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
