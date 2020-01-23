import React from 'react';
import Homeworld from './Homeworld';

const CharacterDetails = props => {
  const { char: character } = props.location.state;
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld
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
    </div>
  );
};

export default CharacterDetails;
