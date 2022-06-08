import Axios from 'axios';
import { RENTAL_API_URL } from '@env';

const url = RENTAL_API_URL;

const getData = (IdentificationString, setData, setDescTooLong) => {
  Axios.get(`${url}/api/Service/GetServiceByIdentificationString`, {
    params: { IdentificationString },
  })
    .then(res => {
      setData(res.data);
      if (res.data.description.length >= 100) setDescTooLong(true);
    })
    .catch(err => console.error(err));
};

export { getData };
