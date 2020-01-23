import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Species = ({ species: speciesUrls }) => {
  const [species, setSpecies] = useState({
    loading: true,
    data: [],
    error: ''
  });

  useEffect(() => {
    const names = [];
    const getSpecies = async () => {
      const speciesPromises = speciesUrls.map(s => axios.get(s));
      await Promise.all(speciesPromises)
        .then(res => {
          res.map(({ data: { name } }) => names.push(name));
        })
        .catch(err => {
          setSpecies(prevState => ({
            ...prevState,
            loading: false,
            error: 'Error retrieving species'
          }));
        });
      setSpecies(prevState => ({
        ...prevState,
        data: names,
        loading: false
      }));
    };
    speciesUrls.length && getSpecies();
  }, [speciesUrls]);

  const speciesData = species.data.map(name => <li key={name}>{name}</li>);

  return (
    <div>
      <h4>Species</h4>
      {species.loading ? 'Loading Species...' : <ul>{speciesData}</ul>}
      {species.error && <div>{species.error}</div>}
    </div>
  );
};

export default Species;
