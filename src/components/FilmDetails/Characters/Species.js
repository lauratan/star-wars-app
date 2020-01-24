import React from 'react';
import useResolvePromises from '../../../hooks/useResolvePromises';

const Species = ({ species: urls }) => {
  const [species] = useResolvePromises(urls, 'species');
  const speciesData = species.data.map(species => (
    <li key={species.name}>{species.name}</li>
  ));

  return (
    <div>
      Species:
      <ul>{speciesData}</ul>
    </div>
  );
};

export default Species;
