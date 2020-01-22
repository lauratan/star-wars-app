import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Characters from './Characters';

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
        characters
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
          characters
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
    characters
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
    </div>
  );
};

export default FilmDetails;
