import React from 'react';
import useResolvePromises from '../../../hooks/useResolvePromises';

const Vehicles = ({ vehicles: urls }) => {
  const [vehicles] = useResolvePromises(urls, 'vehicles');
  const vehiclesData = vehicles.data.map(vehicles => (
    <li key={vehicles.name}>{vehicles.name}</li>
  ));

  return (
    <div>
      Vehicles:
      <ul>{vehiclesData}</ul>
    </div>
  );
};

export default Vehicles;
