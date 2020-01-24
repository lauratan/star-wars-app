import React from 'react';
import DisplayResource from '../../commons/DisplayResource';
import useResolvePromises from '../../hooks/useResolvePromises';

const Planets = ({ planets: planetsUrls }) => {
  const [planets] = useResolvePromises(planetsUrls, 'planets');

  return <DisplayResource resources={planets} resourceType='Planets' />;
};

export default Planets;
