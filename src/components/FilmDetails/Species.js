import React from 'react';
import DisplayNames from '../../commons/DisplayNames';
import useResolveNames from '../../hooks/useResolveNames';

const Species = ({ species: speciesUrls }) => {
  const [species] = useResolveNames(speciesUrls, 'species');

  return <DisplayNames resources={species} resourceType='Species' />;
};

export default Species;
