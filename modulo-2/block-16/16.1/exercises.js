// 1;
const action = {
  type: 'LOGIN'
}

const actionCreator = () => {
  return action;
};

// 2;
store.dispatch(actionCreator());

// 3;
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

// 4 e 5;
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
// Change code below this line
  switch(action.type) {
    case LOGIN:
      return { authenticated: true };
    case LOGOUT:
      return { authenticated: false };
    default:
      return state;
  }
// Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN,
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT,
  }
};

// 6;
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
store.subscribe(() => count += 1);
// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

// 7;
const rootReducer = Redux.combineReducers({
  count: reducer,
  auth: authReducer,
});

const store = Redux.createStore(rootReducer);

// 8;
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return({
    type: ADD_NOTE,
    text: note,
  })
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
