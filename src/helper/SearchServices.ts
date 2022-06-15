import axios from 'axios';
import { RENTAL_API_URL } from '@env';

const url = RENTAL_API_URL;

export const searchServices = search => {
  return axios.get(`${RENTAL_API_URL}/api/Service/SearchServices`, {
    params: { Title: search },
    headers: { accept: '*/*' },
  });
};
