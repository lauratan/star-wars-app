import React from 'react';
import useResolvePromises from '../../../../hooks/useResolvePromises';
import DisplayError from '../../../../commons/DisplayError';

const Homeworld = ({ homeworld: url }) => {
  const [homeworld] = useResolvePromises(url, 'homeworld');

  const { error, loading, data } = homeworld;

  return (
    <div>
      <p>
        Homeworld:
        {loading ? ' Loading homeworld.. ' : ` ${data.name}`}
        {error && <DisplayError error={error} />}
      </p>
    </div>
  );
};

export default Homeworld;
