import React, { useEffect, useState } from 'react';
import Card from '../../commons/Card/Card';
import axios from 'axios';
import userLogInToLogged from '../../utils/logged';

const TvShows = ({history,location}) => {
  const [search, setSearch] = useState('聖闘士星矢: Knights of the Zodiac');

  const api_key = `9bdea998845f3f7f94351369bed1fb3a`;
  //necesitamos esto para cuando se renderice por primera vez el componenet y cuanod cambie su estado.
  const [shows, setShows] = useState([]); //array vacio porque la peticion me devuelve un array con las coincidencias.
  const getShows = async () => {
    try {
      const showsList = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${search}`
      );
      setShows(showsList.data.results);
     
    } catch (error) {
      console.log(error);
    }
  };
  const searchHandler = e => {
    const searchImput = e.target.value;
    setSearch(searchImput);
  };
  const submitSearch = e => {
    e.preventDefault();
    getShows();
  };
  useEffect(() => {
    userLogInToLogged(history, location)
    // las peticiones axios, siempre adentro del useEfect.
    // aca llamamos a getShows para que renderise.
    getShows();
  }, []);
  return (
    <div>
      <div className='d-flex justify-content-space-arround container'>
        <h1>Tv Shows</h1>
        <form onSubmit={submitSearch} className='d-flex me-5'>
          <input
            className='form-control me-2'
            type='search'
            placeholder=' Tv Shows'
            aria-label='Search'
            onChange={searchHandler}
          />
          <button className='btn btn-outline-success'>Search</button>
        </form>
      </div>
      {console.log('Shows:', shows)}
      {shows.map(show => (
        <Card key={show.id} data={show}  />
      ))}
      {/* data es el nombre de la prop */}
    </div>
  );
};

export default TvShows;
