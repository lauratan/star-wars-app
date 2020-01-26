import React from 'react';
import useResolvePromises from '../../../../hooks/useResolvePromises';
import DisplayError from '../../../../commons/DisplayError';

const Films = ({ films: filmsUrls }) => {
  const [films] = useResolvePromises(filmsUrls, 'films');

  const { data, error, loading } = films;

  const filmsData = data.map(film => <li key={film.title}>{film.title}</li>);

  return (
    <div>
      <h4>Films:</h4>
      {loading ? 'Loading films...' : <ul>{filmsData}</ul>}
      {error && <DisplayError error={error} />}
    </div>
  );
};

export default Films;
