import React from 'react';
import { Link } from 'react-router-dom';
import useResolvePromises from '../../../hooks/useResolvePromises';

const Characters = ({ characters: charactersUrls }) => {
  const [characters] = useResolvePromises(charactersUrls);

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
