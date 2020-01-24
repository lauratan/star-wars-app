import React from 'react';
import DisplayNames from '../../commons/DisplayNames';
import useResolvePromises from '../../hooks/useResolvePromises';

const Planets = ({ planets: planetsUrls }) => {
  const [planets] = useResolvePromises(planetsUrls, 'planets');

  return <DisplayNames resources={planets} resourceType='Planets' />;
};

export default Planets;
