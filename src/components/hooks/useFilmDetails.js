import { useState, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  title: '',
  episode_id: '',
  opening_crawl: '',
  director: '',
  producer: '',
  release_date: '',
  characters: [],
  planets: [],
  starships: [],
  vehicles: [],
  species: []
};

const useFilmDetails = filmTitle => {
  const [details, setDetails] = useState({
    data: initialState,
    loading: true,
    error: ''
  });
  useEffect(() => {
    const getFilmDetails = async () => {
      try {
        const filmDetails = await axios.get(
          `https://swapi.co/api/films/?search=${encodeURI(filmTitle)}`
        );
        setDetails(prevState => ({
          ...prevState,
          data: filmDetails.data.results[0],
          loading: false
        }));
      } catch (error) {
        setDetails(prevState => ({
          ...prevState,
          error: `Error retrieving ${filmTitle} data`,
          loading: false
        }));
      }
    };
    filmTitle && getFilmDetails();
  }, [filmTitle]);

  return [details];
};

export default useFilmDetails;
