import axios from 'axios';
import { RENTAL_API_URL } from '@env';

const url = RENTAL_API_URL;

export const getRandomServices = (numberOfServices = 2) => {
  return axios({
    method: 'get',
    url: `${url}/api/Service/RandomServices?NumberOfServices=${numberOfServices}`,
  });
};
