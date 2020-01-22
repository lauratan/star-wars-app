import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Characters = ({ characters: charactersUrls }) => {
  const [characters, setCharacters] = useState({
    loading: true,
    data: [],
    error: ''
  });

  useEffect(() => {
    const names = [];
    const getCharacters = async () => {
      const charactersPromises = charactersUrls.map(c => axios.get(c));
      await Promise.all(charactersPromises)
        .then(res => {
          res.map(({ data: { name } }) => names.push(name));
        })
        .catch(err => {
          setCharacters(prevState => ({
            ...prevState,
            loading: false,
            error: 'Error retrieving characters'
          }));
        });
      setCharacters(prevState => ({
        ...prevState,
        data: names,
        loading: false
      }));
    };
    charactersUrls.length && getCharacters();
  }, [charactersUrls]);

  const charactersData = characters.data.map(name => (
    <li key={name}>{name}</li>
  ));

  console.log(characters.loading);
  return (
    <div>
      <h4>Characters</h4>
      {characters.loading ? 'Loading Characters...' : <ul>{charactersData}</ul>}
      {characters.error && <div>{characters.error}</div>}
    </div>
  );
};

export default Characters;
