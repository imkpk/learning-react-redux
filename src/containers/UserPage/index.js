import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import setUser from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectUsers } from './selectors';
import styled from 'styled-components';

const stateSelector = createSelector(makeSelectUsers, (user) => ({
  user,
}));

const actionDispatcher = (dispatch) => {
  return { setUser: (user) => dispatch(setUser(user)) };
};
//css styled

//styled components
const UsersContainers = styled.div`
  width: 100;
  display: flex;
  justify-content: space-evenly;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items:center;
  flex-direction: column;
`;

const UserImage = styled.div`
  width: 7em;
  height: 7em;
  img {
    width: 100%;
    height: 100;
  }
`;

const UserName = styled.h3`
  font-size: 20px;
  color: black;
  margin: 0;
`;

const UserEmail = styled.h2`
  font-size: 20px;
  color: black;
  margin: 0;
`;

function UserPage(porps) {
  const { id: userId } = useParams();
  const { user } = useSelector(stateSelector);
  const { setUser } = actionDispatcher(useDispatch());

  const fetchUser = async (id) => {
    const res = await axios.get(`https://reqres.in/api/users/${ id }`)
      .catch(err => console.log(err));
    setUser(res.data.data);
  };

  useEffect(() => {
    if (userId && userId !== '') {
      fetchUser(userId);
    }
  }, [ userId ]);

  console.log(userId);
  if (!user) {
    return 'Loading...';
  }

  return (<UsersContainers>
    <UserWrapper>
      <UserImage>
        <img src={ user.avatar }/>
      </UserImage>
      <UserName>{ user.first_name } { user.last_name } </UserName>
      <UserEmail>{ user.email } </UserEmail></UserWrapper>
  </UsersContainers>);
}

export default UserPage;