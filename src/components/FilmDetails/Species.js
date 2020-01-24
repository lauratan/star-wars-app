import React from 'react';
import DisplayResource from '../../commons/DisplayResource';
import useAPI from '../../hooks/useAPI';

const Species = ({ species: speciesUrls }) => {
  const [species] = useAPI(speciesUrls, 'species');

  return <DisplayResource resources={species} resourceType='Species' />;
};

export default Species;
