import React from 'react';
import useResolvePromises from '../../../hooks/useResolvePromises';

const Homeworld = ({ homeworld: url }) => {
  const [homeworld] = useResolvePromises(url);

  return (
    <div>
      <p>
        Homeworld:
        {homeworld.loading ? ' Loading homeworld... ' : ` ${homeworld.data.name}`}
        {homeworld.error && <p>{homeworld.error}</p>}
      </p>
    </div>
  );
};

export default Homeworld;
