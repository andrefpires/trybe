// 1.
const action = {
  type: 'LOGIN'
}

const actionCreator = () => {
  return action;
};

// 2.
store.dispatch(actionCreator());

// 3.
const defaultState = {
  login: false,
};

const reducer = (state = defaultState, action) => {
  const { type } = action;

  switch(type) {
    case 'LOGIN':
      return { login: true, };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);
