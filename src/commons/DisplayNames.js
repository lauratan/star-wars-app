import React from 'react';
import DisplayError from './DisplayError';

const DisplayNames = ({ resources, resourceType }) => {
  const nameList = resources.data.map(({ name }, id) => {
    return <li key={`${name}${id}`}>{name}</li>;
  });
  return (
    <div>
      <h4>{resourceType}</h4>
      {resources.loading ? `Loading ${resourceType}...` : <ul>{nameList}</ul>}
      <DisplayError error={resources.error} />
    </div>
  );
};

export default DisplayNames;
