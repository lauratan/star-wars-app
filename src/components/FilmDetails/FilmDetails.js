import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Characters from './Characters/Characters';
import Planets from './Planets';
import Starships from './Starships';
import Species from './Species';
import Vehicles from './Vehicles';

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

const FilmDetails = props => {
  const [film, setFilm] = useState({
    loading: true,
    data: initialState,
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
      setFilm(prevState => ({
        ...prevState,
        loading: false,
        data: filmDetails
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
    planets,
    starships,
    vehicles,
    species
  } = film.data;

  return (
    <div>
      <h1>Film Details Page</h1>
      <h4>Film Metadata</h4>
      {film.loading
        ?'Loading...'
        : <div>
            <p>Title: {title}</p>
            <p>Episode: {episode_id}</p>
            <p>Opening Crawl: {opening_crawl}</p>
            <p>Director: {director}</p>
            <p>Producer: {producer}</p>
          </div>
      }

      {film.error && <div>{film.error}</div>}

      <Characters characters={characters} />

      <Planets planets={planets} />

      <Starships starships={starships} />

      <Vehicles vehicles={vehicles} />

      <Species species={species} />
    </div>
  );
};

export default FilmDetails;
