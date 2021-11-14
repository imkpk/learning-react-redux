import { ActionTypes } from './constants';

const setUsers = (user) => {
  return { type: ActionTypes.SET_USERS, payload: user };
};

export default setUsers;