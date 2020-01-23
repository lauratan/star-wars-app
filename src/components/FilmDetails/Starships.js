import axios from 'axios';
import React, { useEffect, useState } from 'react';

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

  const starshipsData = starships.data.map(name => <li key={name}>{name}</li>);

  return (
    <div>
      <h4>Starships</h4>
      {starships.loading ? 'Loading Starships...' : <ul>{starshipsData}</ul>}
      {starships.error && <div>{starships.error}</div>}
    </div>
  );
};

export default Starships;
