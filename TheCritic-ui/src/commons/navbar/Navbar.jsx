//poner la palabra magica rafce
// las rutas diferenciadas entre movies y tv shpws, se ven en los botones de la navbas.

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Axios from '../../config/Axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/Slices/Users.slice';

const Navbar = ({ history }) => {
  const dispatch = useDispatch();
  const [userSearch, setUserSearch] = useState('');

  //const url = 'http://localhost:3001/api';

  
  const logOutHandler = async e => {
    try {
      const exit = await Axios.get('/logout');
      if (exit.data.logout) {
        localStorage.removeItem('token');
        history.push('/');
      }
    } catch (error) {
      console.log('te queres ir picaronE?');
    }
  };

  const inputHandler = e => setUserSearch(e.target.value);
  const submitHandler = async e => {
    e.preventDefault();
    try {
      /* const queryParams = `?userName=${userSearch}`; */ //esto es para identificar un queryParams.
      console.log('userSearch', userSearch);
      const user = await Axios.get(`/users?userName=${userSearch}`);

      console.log(user.data);
      if (user?.data[0]?.id) {
        //er ? evalua si existe la key y el value. cuando en un objeto hay dentro varios campos.

        dispatch(setUser(user.data[0]));

        history.push(`/users`); // ojo ferchu, esto no agrega a un array, esto t elleva a una ruta que elija.
      } else console.log(`pase por caja, pague e intente denuveo`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <h2 className='navbar-brand'>The Critic</h2>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='/home'
                >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/favorites'>
                  my favorites
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/movies'>
                  movies
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/tv_shows'>
                  tv shows
                </Link>
              </li>
            </ul>
            <form onSubmit={submitHandler} className='d-flex me-5'>
              <input
                onChange={inputHandler}
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success'>Search users</button>
            </form>
            <ul className='navbar-nav '>
              <li className='nav-item'>
                <button
                  onClick={logOutHandler}
                  className='btn btn-light'
                  aria-current='page'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
