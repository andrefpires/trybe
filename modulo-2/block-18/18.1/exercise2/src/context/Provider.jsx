import React, { Component } from 'react';
import Context from './Context';

export default class Provider extends Component {
  constructor() {
    super();
    this.state = ({
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: { color: 'red' },
    })

    this.changeSignal = this.changeSignal.bind(this);
    this.moveCar = this.moveCar.bind(this);
  }

  changeSignal(signalColor) {
    this.setState({
      signal: { color: signalColor},
    })
  }

  moveCar(carColor, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [carColor]: side,
      }
    })
  }

  render() {
    const context = {
      ...this.state,
      changeSignal: this.changeSignal,
      moveCar: this.moveCar,
    }

    const { children } = this.props;
    return (
      <Context.Provider value={context}>
        {children}
      </Context.Provider>
    )
  }
}
