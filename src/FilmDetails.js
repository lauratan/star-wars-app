import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Characters from './Characters';
import Planets from './Planets';

const initialFilm = {
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

const FilmDetails = props => {
  const [film, setFilm] = useState({
    loading: true,
    data: initialFilm,
    error: ''
  });

  const filmTitle = props.match.params.title;

  useEffect(() => {
    const getFilmDetails = async () => {
      const filmDetails = await axios
        .get(`https://swapi.co/api/films/?search=${encodeURI(filmTitle)}`)
        .then(({ data: { results } }) => {
          return results[0];
        })
        .catch(err => {
          setFilm(prevState => ({
            ...prevState,
            error: 'Error retrieving film details',
            loading: false
          }));
        });

      const {
        title,
        episode_id,
        opening_crawl,
        director,
        producer,
        characters,
        planets
      } = filmDetails;

      setFilm(prevState => ({
        ...prevState,
        loading: false,
        data: {
          title,
          episode_id,
          opening_crawl,
          director,
          producer,
          characters,
          planets
        }
      }));
    };

    getFilmDetails();
  }, [filmTitle]);

  const {
    title,
    episode_id,
    opening_crawl,
    director,
    producer,
    characters,
    planets
  } = film.data;
  return (
    <div>
      <h1>Film Details Page</h1>
      <h4>Film Metadata</h4>
      {/* metadata */}
      {film.loading
        ? 'Loading...'
        : <div>
            <p>Title: {title}</p>
            <p>Episode: {episode_id}</p>
            <p>Opening Crawl: {opening_crawl}</p>
            <p>Director: {director}</p>
            <p>Producer: {producer}</p>
          </div>
      }

      {film.error && <div>{film.error}</div>}

      {/* characters */}
      <Characters characters={characters} />

      {/* planets */}
      <Planets planets={planets} />
    </div>
  );
};

export default FilmDetails;
