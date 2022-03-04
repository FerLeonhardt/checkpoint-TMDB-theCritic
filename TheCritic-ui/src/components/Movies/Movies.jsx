import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../../commons/Card/Card';
import userLogInToLogged from '../../utils/logged';

const Movies = ({history,location}) => {
  const [search, setSearch] = useState('any given sunday');

  const api_key = `9bdea998845f3f7f94351369bed1fb3a`;
  //necesitamos esto para cuando se renderice por primera vez el componenet y cuanod cambie su estado.
  const [movies, setMovies] = useState([]); //array vacio porque la peticion me devuelve un array con las coincidencias.
  const getMovies = async () => {
    try {
      const moviesList = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search}`
      );
      setMovies(moviesList.data.results);
      console.log('movies:', movies);
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
    getMovies();
  };
  useEffect(() => {
    userLogInToLogged(history, location)
    // las peticiones axios, siempre adentro del useEfect.
    // aca llamamos a getmovies para que renderise.
    getMovies();
  }, []);
  return (
    <div>
      <div className='d-flex justify-content-space-arround container'>
        <h1>Movies</h1>
        <form onSubmit={submitSearch} className='d-flex me-5'>
          <input
            className='form-control me-2'
            type='search'
            placeholder=' movies'
            aria-label='Search'
            onChange={searchHandler}
          />
          <button className='btn btn-outline-success'>Search</button>
        </form>
      </div>
      {movies.map(movie => (
        <Card key={movie.id} data={movie} />
      ))}
      {/* data es el nombre de la prop */}
    </div>
  );
};

export default Movies;
