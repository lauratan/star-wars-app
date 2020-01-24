import axios from 'axios';
import { useEffect, useState } from 'react';

const useResolvePromises = (urls, resource) => {
  const [resources, setResources] = useState({
    loading: true,
    data: [],
    error: ''
  });

  useEffect(() => {
    const details = [];
    const getResources = async () => {
      const promises = urls.map(url => axios.get(url));
      await Promise.all(promises)
        .then(res => {
          res.map(({ data }) => details.push(data));
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
        data: details,
        loading: false
      }));
    };
    urls.length && getResources();
  }, [urls, resource]);

  return [resources];
};

export default useResolvePromises;
