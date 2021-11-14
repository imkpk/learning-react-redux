import { ActionTypes } from './constants';

const setUsers = (users) => {
  return { type: ActionTypes.SET_USERS, payload: users };
};

export default setUsers;