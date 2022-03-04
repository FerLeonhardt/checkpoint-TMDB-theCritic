// verificamos si el usuario esta logueado y traer los datos del usuario.

import Axios from '../config/Axios';

const userLogInToLogged = async (history, location) => {
  console.log('location', location);
  try {
    const user = await Axios.get('/auth');
    console.log('user', user);
    if (!user.data?.id) history.push('/');
    // si el token se vencio, vuelve al loggin
    else if (location.pathname === '/') history.push('/home');
  } catch (error) {
    console.log(error);
    history.push('/');
  }
};

export default userLogInToLogged;


