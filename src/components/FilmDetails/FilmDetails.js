import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Characters from './Characters';
import Planets from './Planets';
import Starships from './Starships';
import Vehicles from './Vehicles';
import Species from './Species';

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
        planets,
        starships,
        vehicles,
        species
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
          planets,
          starships,
          vehicles,
          species
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
    planets,
    starships,
    vehicles,
    species
  } = film.data;
  return (
    <div>
      <h1>Film Details Page</h1>
      <h4>Film Metadata</h4>
      {/* metadata */}
      {film.loading ? (
        'Loading...'
      ) : (
        <div>
          <p>Title: {title}</p>
          <p>Episode: {episode_id}</p>
          <p>Opening Crawl: {opening_crawl}</p>
          <p>Director: {director}</p>
          <p>Producer: {producer}</p>
        </div>
      )}

      {film.error && <div>{film.error}</div>}

      {/* characters */}
      <Characters characters={characters} />

      {/* planets */}
      <Planets planets={planets} />

      {/* starships */}
      <Starships starships={starships} />

      {/* vehicles */}
      <Vehicles vehicles={vehicles} />

      {/* species */}
      <Species species={species} />
    </div>
  );
};

export default FilmDetails;
