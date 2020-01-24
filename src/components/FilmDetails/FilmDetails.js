import React from 'react';
import Characters from './Characters/Characters';
import Planets from './Planets';
import Starships from './Starships';
import Species from './Species';
import Vehicles from './Vehicles';
import useFilmDetails from '../../hooks/useFilmDetails';
import DisplayError from '../../commons/DisplayError'

const FilmDetails = props => {
  const filmTitle = props.match.params.title;
  const [film] = useFilmDetails(filmTitle);

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

      <DisplayError error={film.error}/>

      <Characters characters={characters} />

      <Planets planets={planets} />

      <Starships starships={starships} />

      <Vehicles vehicles={vehicles} />

      <Species species={species} />
    </div>
  );
};

export default FilmDetails;
