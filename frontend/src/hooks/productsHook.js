import { useState, useEffect } from 'react';
import axios from 'axios';

/*a function for fetching data from the database using axios*/
function useFetchProduct(url) {
  const [data,setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchUrl(url) {
    axios.get(url)
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(error => setIsLoading(true));
    }
  useEffect(() => {
    setTimeout(() => {
      fetchUrl(url);
    }, 1000);
  },[url]);
  return [data,isLoading];
}
export { useFetchProduct };
