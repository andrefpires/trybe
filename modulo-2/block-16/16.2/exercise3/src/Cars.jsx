import React from 'react';
import { connect } from 'react-redux';
import { moveCar } from './redux/actionCreators';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars({
  redCar, blueCar, yellowCar, moveCar
}) {
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button onClick={() => moveCar('red', !redCar)} type="button">Move</button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button onClick={() => moveCar('blue', !blueCar)} type="button">Move</button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button onClick={() => moveCar('yellow', !yellowCar)} type="button">Move</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  moveCar: (car, side) => dispatch(moveCar(car, side)),
});

const mapStateToProps = (state) => ({
  redCar: state.cars.cars.red,
  yellowCar: state.cars.cars.yellow,
  blueCar: state.cars.cars.blue,
})

export default connect(mapStateToProps, mapDispatchToProps)(Cars);