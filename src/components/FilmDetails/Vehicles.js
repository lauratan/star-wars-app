import React from 'react';
import DisplayNames from '../../commons/DisplayNames';
import useResolveNames from '../../hooks/useResolveNames';

const Vehicles = ({ vehicles: vehiclesUrl }) => {
  const [vehicles] = useResolveNames(vehiclesUrl, 'vehicles');

  return <DisplayNames resources={vehicles} resourceType='Vehicles' />;
};

export default Vehicles;
