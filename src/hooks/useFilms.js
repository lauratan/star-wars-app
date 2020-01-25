import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Custom hook: useFilms()
 * I created this because:
 * 1. It will keep Films component cleaner, and only handle the display
 * 2. In case I need to get all films data again somewhere else in the application
 */
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
