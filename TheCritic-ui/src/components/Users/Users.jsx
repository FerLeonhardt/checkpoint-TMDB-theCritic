import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import userLogInToLogged from '../../utils/logged';

const Users = ({ history, location }) => {
  const { user } = useSelector(state => state.user);
console.log("usuario logueado ", user);
  useEffect(() => {
    userLogInToLogged(history, location);
  }, []);

  return (
    <div>
      <div>
        <h1> Users</h1>
        {user?.userName && <div className='card' style={{ width: '500px' }}>
          <h2>{user?.userName} favorites:</h2>
                    <ul className='list-group list-group-flush'>
            {user?.favorites?.map(favorite => (
              <li className='list-group-item'>
                <div  className='d-flex justify-content-between align-items-center' >
                <h3>{favorite?.name}</h3>
                <img  style={{ maxHeight: '150px' }} src={favorite?.url_image} />
                </div>
              </li>
            ))}
          </ul>
        </div>}
      {!user?.userName &&<div>USER NOT FOUND</div>}
      </div>
    </div>
  );
};

export default Users;
