import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DisplayResource from '../commons/DisplayResource';

const Starships = ({ starships: starshipsUrls }) => {
  const [starships, setStarships] = useState({
    loading: true,
    data: [],
    error: ''
  });

  useEffect(() => {
    const names = [];
    const getStarships = async () => {
      const starshipPromises = starshipsUrls.map(s => axios.get(s));
      await Promise.all(starshipPromises)
        .then(res => {
          res.map(({ data: { name } }) => names.push(name));
        })
        .catch(err => {
          setStarships(prevState => ({
            ...prevState,
            loading: false,
            error: 'Error retrieving starships'
          }));
        });
      setStarships(prevState => ({
        ...prevState,
        data: names,
        loading: false
      }));
    };
    starshipsUrls.length && getStarships();
  }, [starshipsUrls]);

  return <DisplayResource resources={starships} resourceType='Starships' />;
};

export default Starships;
