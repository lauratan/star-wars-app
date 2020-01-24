import React from 'react';
import DisplayResource from '../../commons/DisplayResource';
import useAPI from '../../hooks/useAPI';

const Planets = ({ planets: planetsUrls }) => {
  const [planets] = useAPI(planetsUrls, 'planets');

  return <DisplayResource resources={planets} resourceType='Planets' />;
};

export default Planets;
