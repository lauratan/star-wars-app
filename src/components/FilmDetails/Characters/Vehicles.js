import React from 'react';
import DisplayNames from '../../../commons/DisplayNames';
import useResolvePromises from '../../../hooks/useResolvePromises';

const Vehicles = ({ vehicles: urls }) => {
  const [vehicles] = useResolvePromises(urls, 'vehicles');

  return <DisplayNames resources={vehicles} resourceType='Vehicles' />;
};

export default Vehicles;
