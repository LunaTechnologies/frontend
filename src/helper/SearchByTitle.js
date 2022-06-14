import axios from 'axios';
import { RENTAL_API_URL } from '@env';

const searchService = (search, setErrorNotFound) => {
  axios
    .get(`${RENTAL_API_URL}/api/Service/SearchServices`, {
      params: { Title: search },
      headers: { accept: '*/*' },
    })
    .then(res => {
      // TODO Add nav
      console.log(res.data);
      setErrorNotFound(false);
    })
    .catch(err => {
      if (err.response.data === 'No items found') {
        console.log(err.response.data);
        setErrorNotFound(true);
      }
    });
};

const searchService2 = search => {
  return axios.get(`${RENTAL_API_URL}/api/Service/SearchServices`, {
    params: { Title: search },
    headers: { accept: '*/*' },
  });
};

export { searchService, searchService2 };
