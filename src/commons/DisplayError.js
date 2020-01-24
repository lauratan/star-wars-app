import React from 'react';

const DisplayError = ({error}) => {
  return <>{error && <p>{error}</p>}</>;
};

export default DisplayError;
