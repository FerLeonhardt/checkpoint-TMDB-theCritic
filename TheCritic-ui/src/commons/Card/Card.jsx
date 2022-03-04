
import React from 'react';
import Axios from '../../config/Axios';

const Card = ({ data }) => {
  const {
    original_title,
    overview,
    original_language,
    vote_average,
    poster_path,
    original_name,
    id,
  } = data;
  const base_url_image = 'https://image.tmdb.org/t/p/w500';
  const noImage = `https://via.placeholder.com/600/54176f`;

  //const url = 'http://localhost:3001/api';
  const addFavorite = async () => {
    const favorite = await Axios.post(`/favorites`, {
      name: original_title || original_name,
      tmdbId: id,
      url_image: `${base_url_image}${poster_path}`,
    });
    if (favorite) console.log(`${favorite.data.name} ADDED FAVORITE `);
    else console.log(`Siga participando hay miles de premios, pero no tu favorita.`);
  };
  return (
    <div className='card mb-3 mx-auto mt-5 ' style={{ maxWidth: '800px' }}>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img
            src={`${base_url_image}${poster_path}`}
            className='img-fluid rounded-start'
            alt='...'
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{original_title || original_name}</h5>
            <p className='card-text'>
              {overview ||
                `no overview... segui participando hay miles de premios.`}
            </p>
            <p className='card-text'>{original_language}</p>
            <p className='card-text'>{vote_average}</p>
            <button onClick={addFavorite} className='btn btn-outline-success'>
              Add Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
