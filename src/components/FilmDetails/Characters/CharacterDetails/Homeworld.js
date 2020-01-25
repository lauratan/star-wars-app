import React from 'react';
import useResolvePromises from '../../../../hooks/useResolvePromises';
import DisplayError from '../../../../commons/DisplayError';

const Homeworld = ({ homeworld: url }) => {
  const [homeworld] = useResolvePromises(url);

  return (
    <div>
      <p>
        Homeworld:
        {homeworld.loading
          ? ' Loading homeworld... '
          : ` ${homeworld.data.name}`}
        <DisplayError error={homeworld.error} />
      </p>
    </div>
  );
};

export default Homeworld;
