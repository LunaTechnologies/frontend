import Axios from 'axios';

const url = 'https://bcba-54-165-38-8.ngrok.io';

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
