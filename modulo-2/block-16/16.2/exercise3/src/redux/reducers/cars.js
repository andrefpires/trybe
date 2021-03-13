import { MOVE_CAR } from '../actionCreators';

const INITIAL_STATE = {
  cars: {
    red: false,
    yellow: false,
    blue: false,
  }
}

export default function cars(state = INITIAL_STATE, action) {
  switch(action.type) {
    case MOVE_CAR:
      return {...state, cars: { ...state.cars, [action.car]: action.side }};
    default:
      return state;
  }
}
