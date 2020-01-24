import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DisplayResource from '../commons/DisplayResource';

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

  return <DisplayResource resources={species} resourceType='Species' />;
};

export default Species;
