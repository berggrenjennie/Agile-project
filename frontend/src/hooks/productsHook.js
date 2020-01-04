import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchProduct(url) {
  const [data,setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchUrl() {
    axios.get(url)
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(error => setIsLoading(true));
    }
  useEffect(() => {
    setTimeout(() => {
      fetchUrl();
    }, 3000);
  });
  return [data,isLoading];
}
export { useFetchProduct };
