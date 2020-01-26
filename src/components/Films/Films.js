import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFilms from '../../hooks/useFilms';
import DisplayError from '../../commons/DisplayError';

const Films = () => {
  // Using a custom useFilms() react hook here to keep api logic separated from display component
  const [films] = useFilms();
  const [search, setSearch] = useState('');

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const { data, error, loading } = films;

  let filteredFilms = data.filter(film => {
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
      {loading ? <p>Loading...</p> : <ul>{filmData}</ul>}
      {error && <DisplayError error={error} />}
    </div>
  );
};

export default Films;
