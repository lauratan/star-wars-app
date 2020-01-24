import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFilms from '../hooks/useFilms';
import DisplayError from '../../commons/DisplayError';

const Films = () => {
  const [films] = useFilms();
  const [search, setSearch] = useState('');

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
      <DisplayError error={films.error} />
    </div>
  );
};

export default Films;
