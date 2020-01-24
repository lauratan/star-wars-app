import React from 'react';
import DisplayNames from '../../../commons/DisplayNames';
import useResolvePromises from '../../../hooks/useResolvePromises';

const Starships = ({ starships: url }) => {
  const [starships] = useResolvePromises(url, 'starships');

  return <DisplayNames resources={starships} resourceType='Starships' />;
};

export default Starships;
