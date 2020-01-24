import React from 'react';
import Homeworld from './Homeworld';
import Films from './Films';
import Starships from './Starships';
import Vehicles from './Vehicles';
import Species from './Species';

const CharacterDetails = props => {
  const { char: character } = props.location.state;
  console.log(character);
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    films,
    species,
    vehicles,
    starships
  } = character;

  return (
    <div>
      <h4>Character Details</h4>
      <p>Name: {name}</p>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Hair Color: {hair_color}</p>
      <p>Skin Color: {skin_color}</p>
      <p>Eye Color: {eye_color}</p>
      <p>Birth Year: {birth_year}</p>
      <p>Gender: {gender}</p>

      <Homeworld homeworld={homeworld} />

      <Films films={films} />

      <Species species={species} />

      <Vehicles vehicles={vehicles} />

      <Starships starships={starships} />
    </div>
  );
};

export default CharacterDetails;
