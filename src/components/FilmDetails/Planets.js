import React from 'react';
import DisplayNames from '../../commons/DisplayNames';
import useResolveNames from '../../hooks/useResolveNames';

const Planets = ({ planets: planetsUrls }) => {
  const [planets] = useResolveNames(planetsUrls, 'planets');

  return <DisplayNames resources={planets} resourceType='Planets' />;
};

export default Planets;
