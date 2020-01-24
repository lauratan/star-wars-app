import React from 'react';
import DisplayResource from '../../commons/DisplayResource';
import useResolvePromises from '../../hooks/useResolvePromises';

const Starships = ({ starships: starshipsUrls }) => {
  const [starships] = useResolvePromises(starshipsUrls, 'starships');

  return <DisplayResource resources={starships} resourceType='Starships' />;
};

export default Starships;
