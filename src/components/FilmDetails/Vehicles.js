import React from 'react';
import DisplayNames from '../../commons/DisplayNames';
import useResolvePromises from '../../hooks/useResolvePromises';

const Vehicles = ({ vehicles: vehiclesUrl }) => {
  const [vehicles] = useResolvePromises(vehiclesUrl, 'vehicles');

  return <DisplayNames resources={vehicles} resourceType='Vehicles' />;
};

export default Vehicles;
