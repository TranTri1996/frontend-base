import { combineReducers } from 'redux';
import counterReducer from './exampleCounter/counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;
