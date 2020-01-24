import React from 'react';
import DisplayResource from '../../commons/DisplayResource';
import useResolvePromises from '../../hooks/useResolvePromises';

const Vehicles = ({ vehicles: vehiclesUrl }) => {
  const [vehicles] = useResolvePromises(vehiclesUrl, 'vehicles');

  return <DisplayResource resources={vehicles} resourceType='Vehicles' />;
};

export default Vehicles;
