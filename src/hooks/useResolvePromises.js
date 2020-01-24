import axios from 'axios';
import { useEffect, useState } from 'react';

const useResolvePromises = (urls, resource) => {
  const [resources, setResources] = useState({
    loading: true,
    data: [],
    error: ''
  });

  useEffect(() => {
    if (Array.isArray(urls)) {
      const details = [];
      const getResources = async () => {
        const promises = urls.map(url => axios.get(url));
        try {
          const resolvedPromises = await Promise.all(promises);
          resolvedPromises.map(({ data }) => details.push(data));
          setResources(prevState => ({
            ...prevState,
            data: details,
            loading: false
          }));
        } catch (error) {
          setResources(prevState => ({
            ...prevState,
            loading: false,
            error: `Error retrieving ${resource}`
          }));
        }
      };
      urls.length && getResources();
    } else {
      const getResource = async () => {
        try {
          const result = await axios.get(urls);
          setResources(prevState => ({
            ...prevState,
            data: result.data,
            loading: false
          }));
        } catch {
          setResources(prevState => ({
            ...prevState,
            error: `Error retrieving ${resource}`,
            loading: false
          }));
        }
      };
      urls && getResource();
    }
  }, [urls, resource]);

  return [resources];
};

export default useResolvePromises;
