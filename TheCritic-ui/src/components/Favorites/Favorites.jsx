import React, { useState, useEffect } from 'react';
import Minicard from '../../commons/Minicard/Minicard';
import userLogInToLogged from '../../utils/logged';
import Axios from '../../config/Axios';

const Favorites = ({ history, location }) => {
  //const url = 'http://localhost:3001/api';
  //const userId = 2; // este id lo sacariamos del usuario del estado global.
  const [favorites, setFavorites] = useState([]);

  const getMyFavorite = async () => {
    try {
      const favoriteList = await Axios.get(`/favorites`);
      setFavorites(favoriteList.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFav = async id => {
    try {
      const deleted = await Axios.delete(`/favorites/${id}`);
      if (deleted) getMyFavorite();
      else
        console.log(
          `esta peli, es toxic@, no se va ni te va a dejar de llamar!`
        );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //lo que este adentro, hace que se ejecute cunado se carga el componente, y cada vez que
    userLogInToLogged(history, location);
    getMyFavorite();
  }, []);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length &&
        favorites.map(favorite => (
          <Minicard key={favorite.id} data={favorite} deleteFav={deleteFav} />
        ))}
      {!favorites.length && (
        <div className='text-center'>
          <h2 >
            INDESIS@ O INSEGUR@, NO TIENEN FAVORITOS
          </h2>
          <img style={{height:"80vh", width:"auto"}} src='https://i.kym-cdn.com/photos/images/original/000/806/901/fdb.png'/>
        </div>
      )}
    </div>
  );
};

export default Favorites;
