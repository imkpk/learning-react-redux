// import React from 'react';
import { createSelector } from 'reselect';
import { makeSelectUsers } from './selectors';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import setUsers from './actions';
import UsersList from '../Homepage/usersList';
const sateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

const actionDispatch = (dispatch) => ({
  setUser: (users) => dispatch(setUsers(users)),
});

//actual component
export default function Homepage(props) {
  const { users } = useSelector(sateSelector);
  const { setUser } = actionDispatch(useDispatch());
  //dispatchers are used store the api data into Redux-store

  const fetchUsers = async () => {
    const res = await axios.get(`https://reqres.in/api/users`)
      .catch(err => console.log(err));
    setUser(res['data']['data']);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log('Users:', users);

//   console.log(fetchUsers());
  return <div>
    <UsersList/>
  </div>;
}