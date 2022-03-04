import Axios from '../../config/Axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = ({history}) => {
  const [inputs, setInputs] = useState({}); //recibe un objeto vacio, por los 4 inputs que tenemos. esto va a ser un key value.
  //const url = 'http://localhost:3001/api';

  const inputHandler = e => {
    const { name, value } = e.target; // funcion reutilizable para los 4 values.
    setInputs({ ...inputs, [name]: value });
  };

  const submitHandler = async e => {
    e.preventDefault();
    try {
      const userCreated = await Axios.post(`/register`, inputs);
      if (userCreated) {
        console.log('ahora sos un Critic.');
        history.push(`/`);
      } else console.log('no tenes zapatos, no podes entrar');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container m-5 text-center' style={{}}>
      <div>
        <h1>I have an idea, register yourself!</h1>
        <div>
          <img  style={{height:"300px", width:"auto"}} src='https://dotandline.net/wp-content/uploads/2016/10/1_C8zR_OScPTYKXJq41LSPaQ.jpeg'></img>
        </div>
      </div>
      <div className='container p-5 border mt-5' style={{ maxWidth: '600px' }}>
        <form onSubmit={submitHandler}>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Name
            </label>
            <div className='col-sm-10'>
              <input
                name='name'
                onChange={inputHandler}
                type='text'
                className='form-control'
                id='inputEmail3'
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputPassword3' className='col-sm-2 col-form-label'>
              LastName
            </label>
            <div className='col-sm-10'>
              <input
                name='lastName'
                onChange={inputHandler}
                type='text'
                className='form-control'
                id='inputPassword3'
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputPassword3' className='col-sm-2 col-form-label'>
              UserName
            </label>
            <div className='col-sm-10'>
              <input
                name='userName'
                onChange={inputHandler}
                type='text'
                className='form-control'
                id='inputPassword3'
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
          <button className='btn btn-primary'>Register up</button>
          <Link to='/' className='btn btn-secondary'>
              Back logIn
            </Link>
          </div>
        
        </form>
      </div>
      {console.log(inputs)}
    </div>
  );
};

export default Register;
