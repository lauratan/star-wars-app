import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Homeworld = ({ homeworld: url }) => {
  const [homeworld, setHomeworld] = useState({
    loading: true,
    name: '',
    error: ''
  });

  useEffect(() => {
    axios
      .get(url)
      .then(({ data: { name } }) => {
        setHomeworld(prevState => ({
          ...prevState,
          loading: false,
          name
        }));
      })
      .catch(err => {
        setHomeworld(prevState => ({
          ...prevState,
          loading: false,
          error: "Error retrieving character's homeworld"
        }));
      });
  }, [url]);
  return (
    <div>
      <p>Homeworld: {homeworld.loading ? 'Loading homeworld... ' : homeworld.name}</p>
    </div>
  );
};

export default Homeworld;
