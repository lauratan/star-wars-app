import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Planets = ({ planets: planetsUrls }) => {
  const [planets, setPlanets] = useState({
    loading: true,
    data: [],
    error: ''
  });

  useEffect(() => {
    const names = [];
    const getPlanets = async () => {
      const planetsPromises = planetsUrls.map(c => axios.get(c));
      await Promise.all(planetsPromises)
        .then(res => {
          res.map(({ data: { name } }) => names.push(name));
        })
        .catch(err => {
          setPlanets(prevState => ({
            ...prevState,
            loading: false,
            error: 'Error retrieving planets'
          }));
        });
      setPlanets(prevState => ({
        ...prevState,
        data: names,
        loading: false
      }));
    };
    planetsUrls.length && getPlanets();
  }, [planetsUrls]);

  const planetsData = planets.data.map(name => (
    <li key={name}>{name}</li>
  ));


  return (
    <div>
      <h4>Planets</h4>
      {planets.loading ? 'Loading Planets...' : <ul>{planetsData}</ul>}
      {planets.error && <div>{planets.error}</div>}
    </div>
  );
};

export default Planets;
