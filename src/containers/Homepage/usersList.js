import { createSelector } from 'reselect';
import { makeSelectUsers } from './selectors';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

//styled components
const UsersContainers = styled.div`
  width: 100;
  display: flex;
  justify-content: space-evenly;
`;

const UserWrapper = styled.div`
  display: flex;
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

const UserName = styled.div`
  font-size: 20px;
  color: black;
  margin: 0;
`;

const stateSelector = createSelector(makeSelectUsers, (users) => ({ users }));

function UsersList(props) {
  const { users } = useSelector(stateSelector);

  const isEmptyUser = !users || (users && users.length === 0);


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory();
  const goToUserPage = (id) => {
    history.push(`/${ id }`);
  };

  if (isEmptyUser) {
    return `Loading...`;
  }
  return (<UsersContainers>
    {
      users.map((user, idx) => (

        <UserWrapper key={ idx } onClick={ () => goToUserPage(user.id) }>
          <UserImage>
            <img src={ user.avatar } alt="user"/>
          </UserImage>
          <UserName>{ user['first_name'] } { user['last_name'] }</UserName>
        </UserWrapper>
      ))
    }
  </UsersContainers>);
}

export default UsersList;