import axios from 'axios';
import { useEffect, useState } from 'react';

const useResolvePromises = (urls, resource) => {
  const [resources, setResources] = useState({
    loading: false,
    data: [],
    error: ''
  });

  useEffect(() => {
    /**
     * Extracted functions
     *
     * 1. initiateLoading()
     * 2. handleNoResource()
     * 3. handleSuccess()
     * 4. handleError()
     * 5. handleUrlsArray()
     * 6. handleSingleUrl()
     *  */

    // set loading state to true
    const initiateLoading = () => {
      setResources(prevState => ({
        ...prevState,
        loading: true
      }));
    };
    // display proper no resource message if no resource can be fetched
    const handleNoResource = () => {
      setResources(prevState => ({
        ...prevState,
        data: [{ name: `No ${resource}` }],
        loading: false
      }));
    };
    // update returned data state when promises resolve
    const handleSuccess = data => {
      setResources(prevState => ({
        ...prevState,
        data,
        loading: false
      }));
    };
    // set error message if error resolving promises/fetching API
    const handleError = () => {
      setResources(prevState => ({
        ...prevState,
        loading: false,
        error: `Error retrieving ${resource}`
      }));
    };
    // resolve the array of promises from urls and handle the result
    const handleUrlsArray = async () => {
      const details = [];
      const promises = urls.map(url => axios.get(url));
      try {
        const resolvedPromises = await Promise.all(promises);
        resolvedPromises.map(({ data }) => details.push(data));
        handleSuccess(details);
      } catch (error) {
        handleError();
      }
    };
    // fetch the single api and handle result
    const handleSingleUrl = async () => {
      try {
        const result = await axios.get(urls);
        handleSuccess(result.data);
      } catch {
        handleError();
      }
    };

    // Start here - initiate loading state
    initiateLoading();
    // Check urls type and handle accordingly
    if (Array.isArray(urls))
      urls.length ? handleUrlsArray() : handleNoResource();
    else urls ? handleSingleUrl() : handleNoResource();
  }, [urls, resource]);

  return [resources];
};

export default useResolvePromises;
