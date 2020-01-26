import React from 'react';
import DisplayError from './DisplayError';

const DisplayNames = ({ resources, resourceType }) => {
  const nameList = resources.data.map(({ name }, id) => {
    return <li key={`${name}${id}`}>{name}</li>;
  });

  const { error, loading } = resources;

  return (
    <div>
      <h4>{resourceType}</h4>
      {loading ? `Loading ${resourceType}...` : <ul>{nameList}</ul>}
      {error && <DisplayError error={error} />}
    </div>
  );
};

export default DisplayNames;
