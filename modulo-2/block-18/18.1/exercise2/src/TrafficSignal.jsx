import React, { Component } from 'react';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import Context from './context/Context';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

export default class TrafficSignal extends Component {
  render() {
    const { signal } = this.context;
    const { changeSignal } = this.context;
    return (
      <div>
        <div className="button-container">
          <button onClick={() => changeSignal("red")} type="button">
            Red
          </button>
          <button onClick={() => changeSignal("yellow")} type="button">
            Yellow
          </button>
          <button onClick={() => changeSignal("green")} type="button">
            Green
          </button>
        </div>
        <img className="signal" src={renderSignal(signal.color)} alt="" />
      </div>
    );
  }
};

TrafficSignal.contextType = Context;
