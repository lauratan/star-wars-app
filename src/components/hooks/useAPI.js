import axios from 'axios';
import { useEffect, useState } from 'react';

const useAPI = (urls, resource) => {
  const [resources, setResources] = useState({
    loading: true,
    data: [],
    error: ''
  });

  useEffect(() => {
    const names = [];
    const getResources = async () => {
      const promises = urls.map(url => axios.get(url));
      await Promise.all(promises)
        .then(res => {
          res.map(({ data: { name } }) => names.push(name));
        })
        .catch(error => {
          setResources(prevState => ({
            ...prevState,
            loading: false,
            error: `Error retrieving ${resource}`
          }));
        });
      setResources(prevState => ({
        ...prevState,
        data: names,
        loading: false
      }));
    };
    urls.length && getResources();
  }, [urls, resource]);

  return [resources];
};

export default useAPI;
