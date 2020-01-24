import React from 'react';
import DisplayNames from '../../commons/DisplayNames';
import useResolveNames from '../../hooks/useResolveNames';

const Starships = ({ starships: starshipsUrls }) => {
  const [starships] = useResolveNames(starshipsUrls, 'starships');

  return <DisplayNames resources={starships} resourceType='Starships' />;
};

export default Starships;
