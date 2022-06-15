import Axios from 'axios';
import { RENTAL_API_URL } from '@env';

const url = RENTAL_API_URL;

const getData = IdentificationString => {
  return Axios.get(`${url}/api/Service/GetServiceByIdentificationString`, {
    params: { IdentificationString },
  });
};

export { getData };
