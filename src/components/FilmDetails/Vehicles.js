import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DisplayResource from '../commons/DisplayResource';

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

  return <DisplayResource resources={vehicles} resourceType='Vehicles' />;
};

export default Vehicles;
