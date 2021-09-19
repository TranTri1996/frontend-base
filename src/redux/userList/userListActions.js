import { GET_USERS } from './userListActionTypes';
import { createAsyncAction } from 'shared';

export const getUserList = () => {
  return createAsyncAction({
    type: GET_USERS,
    payload: {
      request: 'https://gorest.co.in/public/v1/users', //free online api endpoint
      params: {},
    }
  });
};
