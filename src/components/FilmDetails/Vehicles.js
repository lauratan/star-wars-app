import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Vehicles = ({ vehicles: vehiclesUrl }) => {
  const [vehicles, setVehicles] = useState({
    loading: true,
    data: [],
    error: ''
  });

  useEffect(() => {
    const names = [];
    const getVehicles = async () => {
      const vehiclesPromises = vehiclesUrl.map(v => axios.get(v));
      await Promise.all(vehiclesPromises)
        .then(res => {
          res.map(({ data: { name } }) => names.push(name));
        })
        .catch(err => {
          setVehicles(prevState => ({
            ...prevState,
            loading: false,
            error: 'Error retrieving vehicles'
          }));
        });
      setVehicles(prevState => ({
        ...prevState,
        data: names,
        loading: false
      }));
    };
    vehiclesUrl.length && getVehicles();
  }, [vehiclesUrl]);

  const vehiclesData = vehicles.data.map(name => <li key={name}>{name}</li>);

  return (
    <div>
      <h4>Vehicles</h4>
      {vehicles.loading ? 'Loading Vehicles...' : <ul>{vehiclesData}</ul>}
      {vehicles.error && <div>{vehicles.error}</div>}
    </div>
  );
};

export default Vehicles;
