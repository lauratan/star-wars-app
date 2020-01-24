import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DisplayResource from '../commons/DisplayResource';

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

  return <DisplayResource resources={planets} resourceType='Planets' />;
};

export default Planets;
