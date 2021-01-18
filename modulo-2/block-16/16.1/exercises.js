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
// Change code below this line
  const { type } = action;
  switch(type) {
    case 'LOGIN':
      return { login: true, };
    default:
      return state;
  }
// Change code above this line
};

const store = Redux.createStore(reducer);

// 4.
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
// Change code below this line
  switch(action.type) {
    case 'LOGIN':
      return { authenticated: true };
    case 'LOGOUT':
      return { authenticated: false };
    default:
      return state;
  }
// Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
