import { createStore } from 'redux';
import cars from './reducers/cars';

const store = createStore(cars, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
