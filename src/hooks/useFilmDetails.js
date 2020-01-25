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

/**
 * Custom hook: useFilmDetails()
 * I created this because:
 * 1. It will keep FilmDetails component cleaner, and only handle the display of the separate components of film details
 * 2. In case I need to get another film's details again somewhere else in the application so the the same logic can be used elsewhere
 */

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
