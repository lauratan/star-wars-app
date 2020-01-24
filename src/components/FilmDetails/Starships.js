import React from 'react';
import DisplayNames from '../../commons/DisplayNames';
import useResolvePromises from '../../hooks/useResolvePromises';

const Starships = ({ starships: starshipsUrls }) => {
  const [starships] = useResolvePromises(starshipsUrls, 'starships');

  return <DisplayNames resources={starships} resourceType='Starships' />;
};

export default Starships;
