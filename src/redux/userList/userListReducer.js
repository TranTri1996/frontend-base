import { GET_USERS } from './userListActionTypes';
import { initActionType, successActionType } from '../../shared';
const INITIAL_STATE = {
  isLoading: false,
  userDetailList: []
};

export const userListReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case initActionType(GET_USERS):
      return {
        ...state,
        isLoading: true
      };
    case successActionType(GET_USERS):
      return {
        ...state,
        isLoading: false,
        userDetailList: state.userDetailList.concat(payload.data)
      };
    default:
      return state;
  }
};

export default userListReducer;
