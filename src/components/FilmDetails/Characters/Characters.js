import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Characters = ({ characters: charactersUrls }) => {
  const [characters, setCharacters] = useState({
    loading: true,
    data: [],
    error: ''
  });

  useEffect(() => {
    const charactersArr = [];
    const getCharacters = async () => {
      const charactersPromises = charactersUrls.map(c => axios.get(c));
      await Promise.all(charactersPromises)
        .then(res => {
          res.map(({ data }) => charactersArr.push(data));
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
        data: charactersArr,
        loading: false
      }));
    };
    charactersUrls.length && getCharacters();
  }, [charactersUrls]);

  const charactersData = characters.data.map(char => {
    const { name } = char;
    return (
      <li key={name}>
        <Link to={{ pathname: `/character/${name}`, state: { char } }}>
          {name}
        </Link>
      </li>
    );
  });

  return (
    <div>
      <h4>Characters</h4>
      {characters.loading ? 'Loading Characters...' : <ul>{charactersData}</ul>}
      {characters.error && <div>{characters.error}</div>}
    </div>
  );
};

export default Characters;
