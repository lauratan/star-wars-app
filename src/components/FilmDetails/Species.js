import React from 'react';
import DisplayResource from '../../commons/DisplayResource';
import useResolvePromises from '../../hooks/useResolvePromises';

const Species = ({ species: speciesUrls }) => {
  const [species] = useResolvePromises(speciesUrls, 'species');

  return <DisplayResource resources={species} resourceType='Species' />;
};

export default Species;
