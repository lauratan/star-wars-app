import React from 'react';
import useResolvePromises from '../../../hooks/useResolvePromises';

const Starships = ({ starships: url }) => {
  const [starships] = useResolvePromises(url, 'starships');
  const starshipsData = starships.data.map(starship => (
    <li key={starship.name}>{starship.name}</li>
  ));

  return (
    <div>
      Starships:
      <ul>{starshipsData}</ul>
    </div>
  );
};

export default Starships;
