import React from 'react';

const Minicard = ({ data, deleteFav}) => {
  const { name, url_image, id } = data;
const deleteFavorite=()=>{
  deleteFav(id)// no hace falta asincronia, porqie esta declarada en otro lado

}
  return (
    <div className='card mb-3 mx-auto mt-5 ' style={{ maxWidth: '540px' }}>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img
            src={`${url_image}`}
            className='img-fluid rounded-start'
            alt='...'
            style={{ maxHeight: '150px' }}
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h3 className='card-title mt-3'>{name}</h3>
            <button onClick={deleteFavorite} className='btn btn-outline-danger'>
              Delete from Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minicard;
