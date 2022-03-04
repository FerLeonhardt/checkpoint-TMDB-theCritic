// vamos a configurar que para navegar tiene que estar logueado si o si.
//configurar para que en el ehader podamso mandar los token.

import axios from 'axios';
const baseURL = 'http://localhost:3001/api'

const Axios = axios.create({ baseURL });/* Axios, es la pre ruta establecida. */

Axios.interceptors.request.use(
  //una propiedad de axios, es interceptors.
    config => {
    const token = localStorage.getItem('token');
    token
      ? (config.headers.Authorization = token)// si encontramos el token, esta ok
      : delete config.headers.Authorization;
      //me borra lo q tenga en headers.autorization.
      // esta en la documentacion.

    return config;
  },
  null, //esta en la documentacion
  { synchronous: true }// documentacion.
);

export default Axios;
