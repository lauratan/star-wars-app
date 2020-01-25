import React from 'react';
import useResolvePromises from '../../../../hooks/useResolvePromises';
import DisplayNames from '../../../../commons/DisplayNames';

const Species = ({ species: urls }) => {
  const [species] = useResolvePromises(urls, 'species');

  return <DisplayNames resources={species} resourceType='Species' />;
};

export default Species;
