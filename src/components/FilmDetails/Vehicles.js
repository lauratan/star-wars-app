import React from 'react';
import DisplayResource from '../commons/DisplayResource';
import useAPI from '../hooks/useAPI';

const Vehicles = ({ vehicles: vehiclesUrl }) => {
  const [vehicles] = useAPI(vehiclesUrl, 'vehicles');

  return <DisplayResource resources={vehicles} resourceType='Vehicles' />;
};

export default Vehicles;
