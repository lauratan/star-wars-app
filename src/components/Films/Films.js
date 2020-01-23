import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Films = () => {
  const [films, setFilms] = useState({
    loading: true,
    data: [],
    error: ''
  });
  const [search, setSearch] = useState('');

  const getFilms = async () => {
    const filmsResult = await axios
      .get('https://swapi.co/api/films')
      .then(({ data: { results } }) => {
        return results;
      })
      .catch(err => {
        setFilms(prevState => ({
          ...prevState,
          loading: false,
          error: 'Error getting films from SWAPI'
        }));
      });

    setFilms(prevState => ({
      ...prevState,
      loading: false,
      data: filmsResult
    }));
  };

  useEffect(() => {
    getFilms();
  }, []);

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  let filteredFilms = films.data.filter(film => {
    return film.title.toLowerCase().includes(search.toLowerCase());
  });

  const filmData = filteredFilms.map(film => {
    return (
      <li key={film.episode_id}>
        <Link to={`/film/${film.title}`}>{film.title}</Link>
      </li>
    );
  });

  return (
    <div>
      <h1>Film List Page</h1>
      <span>
        Search: <input value={search} onChange={e => handleSearch(e)} />
      </span>
      {films.loading ? <p>Loading...</p> : <ul>{filmData}</ul>}
      {films.error && <div>{films.error}</div>}
    </div>
  );
};

export default Films;
