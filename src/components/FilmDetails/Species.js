import React from 'react';
import DisplayNames from '../../commons/DisplayNames';
import useResolvePromises from '../../hooks/useResolvePromises';

const Species = ({ species: speciesUrls }) => {
  const [species] = useResolvePromises(speciesUrls, 'species');

  return <DisplayNames resources={species} resourceType='Species' />;
};

export default Species;
