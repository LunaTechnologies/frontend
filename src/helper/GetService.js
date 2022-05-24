import Axios from 'axios';

const url = 'https://bcba-54-165-38-8.ngrok.io';

const getData = (IdentificationString, setData) => {
  Axios.get(`${url}/api/Service/GetServiceByIdentificationString`, {
    params: { IdentificationString },
  })
    .then(res => setData(res.data))
    .catch(err => console.error(err));
};

export { getData };
