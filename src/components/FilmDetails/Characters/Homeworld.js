import React from 'react';
import useResolvePromise from '../../../hooks/useResolvePromise';

const Homeworld = ({ homeworld: url }) => {
  const [homeworld] = useResolvePromise(url);

  return (
    <div>
      <p>
        Homeworld:
        {homeworld.loading ? ' Loading homeworld... ' : ` ${homeworld.data.name}`}
      </p>
    </div>
  );
};

export default Homeworld;
