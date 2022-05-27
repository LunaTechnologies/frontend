import Axios from 'axios';
import axios from 'axios';
import { RENTAL_API_URL } from '@env';

export const submitPost = data => {
  const url = `${RENTAL_API_URL}/api/Service`;
  const { title, images, description, price, currency, payedPer, phoneNumber } =
    data;
  const bodyFormData = new FormData();
  bodyFormData.append('Title', title);
  bodyFormData.append('Description', description);
  bodyFormData.append('Images', []);
  bodyFormData.append('Price', parseFloat(price));
  bodyFormData.append('PhoneNumber', phoneNumber);
  bodyFormData.append('ServType', payedPer);
  // bodyFormData.append('', );

  console.log(bodyFormData);

  // Axios.get(
  //   `${url}/GetServiceByIdentificationString?IdentificationString=Pc7kwl2FzOIooBH`,
  // )
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

  // Axios.post(`${url}/CreateService`, bodyFormData)
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  axios({
    method: 'post',
    url: `${url}/CreateService`,
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then(response => {
      //handle success
      console.log(response);
    })
    .catch(err => {
      //handle error
      console.log(err);
    });
};
