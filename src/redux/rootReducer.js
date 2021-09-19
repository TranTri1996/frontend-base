import { combineReducers } from 'redux';
import { userListReducer } from './userList/userListReducer';

const rootReducer = combineReducers({
  users: userListReducer
});

export default rootReducer;
