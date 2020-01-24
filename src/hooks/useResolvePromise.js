import axios from 'axios';
import { useEffect, useState } from 'react';

const useResolvePromise = (url, resource) => {
  const [resources, setResources] = useState({
    loading: true,
    data: {},
    error: ''
  });

  useEffect(() => {
    const getResources = async () => {
      try {
        const result = await axios.get(url);
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
    url && getResources();
  }, [url, resource]);

  return [resources];
};

export default useResolvePromise;
