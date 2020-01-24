import React from 'react';
import useResolvePromises from '../../../hooks/useResolvePromises';

const Films = ({ films: filmsUrls }) => {
  const [films] = useResolvePromises(filmsUrls, 'films');
  const filmsData = films.data.map(film => (
    <li key={film.title}>{film.title}</li>
  ));

  return (
    <div>
      Films:
      <ul>{filmsData}</ul>
    </div>
  );
};

export default Films;
