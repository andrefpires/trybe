import { combineReducers, createStore} from 'redux';
import cars from './reducers/cars';
import changeSignal from './reducers/traffic';

const rootReducer = combineReducers({cars, changeSignal});
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
