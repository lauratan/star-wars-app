import React from 'react';
import DisplayResource from '../../commons/DisplayResource';
import useAPI from '../../hooks/useAPI';

const Starships = ({ starships: starshipsUrls }) => {
  const [starships] = useAPI(starshipsUrls, 'starships');

  return <DisplayResource resources={starships} resourceType='Starships' />;
};

export default Starships;
