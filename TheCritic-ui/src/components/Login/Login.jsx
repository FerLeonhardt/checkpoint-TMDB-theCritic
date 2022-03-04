import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from '../../config/Axios';
import userLogInToLogged from '../../utils/logged';

const Login = ({ history, location }) => {
  //history es una propiedad que tenemos pro defecto.
  const [logIn, setLogIn] = useState({});
  const [error, setError] = useState(false);

  //const url = 'http://localhost:3001/api';

  const inputHandler = e => {
    const { name, value } = e.target;
    setLogIn({ ...logIn, [name]: value });
  };
  const submitHandler = async e => {
    e.preventDefault();
    try {
      console.log("enviara", logIn);
      const logged = await Axios.post(`/login`, logIn); // ante era `${url}/login`, pero como creamos la baseUrl en Axos y se lo metemos aca, no hace falta el ${url}
      if (logged.data?.token) {
        console.log(`bienvenido a The Critic`, logged);
        localStorage.setItem('token', logged.data.token); // para guardar en el localStorahe, lo tengo que hacer ocmo string, no ocmo objeto. el logged.data me va a dar el token que necesito.
          history.push(`/home`); // ojo ferchu, esto no agrega a un array, esto t elleva a una ruta que elija.
          
            } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
        console.log(`pase por caja, page e intente denuveo`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userLogInToLogged(history, location);
  }, []);

  return (
    <div className='container m-5 text-center' style={{}}>
      <div>
        <h1>Bienvenidos a The Critic</h1>
        <div>
          <img  style={{height:"300px", width:"auto"}} src='https://flxt.tmsimg.com/assets/p504615_i_v9_am.jpg '></img>
        </div>
      </div>
      <div className='container p-5 border mt-5' style={{ maxWidth: '600px' }}>
        <form onSubmit={submitHandler}>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              userName
            </label>
            <div className='col-sm-10'>
              <input
                autoFocus
                name='userName'
                onChange={inputHandler}
                type='text'
                className='form-control'
                id='inputEmail3'
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputPassword3' className='col-sm-2 col-form-label'>
              Password
            </label>
            <div className='col-sm-10'>
              <input
                name='password'
                onChange={inputHandler}
                type='password'
                className='form-control'
                id='inputPassword3'
              />
            </div>
          </div>
          <div className='d-flex justify-content-between'>
            <button className='btn btn-primary'>Sign in</button>
            <Link to='/register' className='btn btn-secondary'>
              REGISTER
            </Link>
          </div>
        </form>
        {error && (
          <div className='alert alert-danger' role='alert'>
            YOU STINK, REGISTRATE...
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
