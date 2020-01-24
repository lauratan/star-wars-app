import React from 'react';

const DisplayResource = ({ resources, resourceType }) => {
  const resourceList = resources.data.map(name => <li key={name}>{name}</li>);
  return (
    <div>
      <h4>{resourceType}</h4>
      {
        resources.loading
        ? `Loading ${resourceType}...`
        :  <ul>{resourceList}</ul>
      }
      {resources.error && <p>{resources.error}</p>}
    </div>
  );
};

export default DisplayResource;
