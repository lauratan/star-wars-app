import React from 'react';
import { Link } from 'react-router-dom';
import useResolvePromises from '../../../hooks/useResolvePromises';
import DisplayError from '../../../commons/DisplayError';

const Characters = ({ characters: charactersUrls }) => {
  const [characters] = useResolvePromises(charactersUrls, 'characters');

  const { error, loading, data } = characters;

  const charactersData = data.map(char => {
    const { name } = char;
    // character's info are passed to the characterDetails component as props
    // which means the details are only accessible when user go to that character detail path through this link
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
      {loading ? 'Loading Characters...' : <ul>{charactersData}</ul>}
      {error && <DisplayError error={error} />}
    </div>
  );
};

export default Characters;
