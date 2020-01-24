import React from 'react';

const DisplayNames = ({ resources, resourceType }) => {
  const nameList = resources.data.map(({ name }, id) => {
    return <li key={`${name}${id}`}>{name}</li>;
  });
  return (
    <div>
      <h4>{resourceType}</h4>
      {resources.loading ? `Loading ${resourceType}...` : <ul>{nameList}</ul>}
      {resources.error && <p>{resources.error}</p>}
    </div>
  );
};

export default DisplayNames;
