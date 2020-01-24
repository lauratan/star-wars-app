import { useState, useEffect } from 'react';
import axios from 'axios';

const useFilms = () => {
  const [films, setFilms] = useState({
    data: [],
    loading: true,
    error: ''
  });

  useEffect(() => {
    const getFilmsData = async () => {
      try {
        const filmsData = await axios.get('https://swapi.co/api/films');
        setFilms(prevState => ({
          ...prevState,
          data: filmsData.data.results,
          loading: false
        }));
      } catch (error) {
        setFilms(prevState => ({
          ...prevState,
          error: 'Error retrieving films data',
          loading: false
        }));
      }
    };
    getFilmsData();
  }, []);
  return [films];
};

export default useFilms;
