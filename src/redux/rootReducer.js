import { combineReducers } from 'redux';
import counterReducer from './counter/counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;
