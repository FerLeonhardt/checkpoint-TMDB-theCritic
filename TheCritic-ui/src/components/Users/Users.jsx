import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import userLogInToLogged from '../../utils/logged';

const Users = ({ history, location }) => {
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    userLogInToLogged(history, location);
  }, []);

  return (
    <div>
      <div>
        <h1> Users</h1>
        <div className='card' style={{ width: '18rem' }}>
          <h2>{user?.userName}</h2>
          <h2>favorites:</h2>
          <ul className='list-group list-group-flush'>
            {user?.favorites?.map(favorite => (
              <li className='list-group-item'>
                <h3>{favorite?.name}</h3>
                <img src={favorite?.url_image} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Users;
