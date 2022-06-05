import Axios from 'axios';
import axios from 'axios';
import { RENTAL_API_URL } from '@env';
import { ACCESS_TOKEN } from '@env';

export const submitPost = data => {
  const url = `${RENTAL_API_URL}/api/Service`;
  // const token = ACCESS_TOKEN;
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIzIiwibmFtZSI6ImY2NFNob3AiLCJyb2xlIjoiVXNlciIsIm5iZiI6MTY1NDQyNjM3OSwiZXhwIjoxNjU0NDI2OTc5LCJpYXQiOjE2NTQ0MjYzNzl9.EGAT3Ul_MoOupctb2Vhmqpjk0kNKxcOE6HqDEZ5Ej2g';

  const { title, images, description, price, currency, payedPer, phoneNumber } =
    data;
  const bodyFormData = new FormData();

  // // bodyFormData.append('pictures', images);
  // // bodyFormData.append('pictures', JSON.stringify(images));
  // bodyFormData.append('pictures', JSON.stringify(images));
  // bodyFormData.append('Title', title);
  // bodyFormData.append('Description', description);
  // bodyFormData.append('PhoneNumber', phoneNumber);
  // // bodyFormData.append('Price', parseFloat(price));
  // bodyFormData.append('Price', 0);
  // // bodyFormData.append('Username', 'alexeu123');
  // // bodyFormData.append('ServType', payedPer);
  // bodyFormData.append('ServType', 'zi');
  // // bodyFormData.append('', );



  bodyFormData.append('pictures', JSON.stringify(images));
  bodyFormData.append('Title', "Titlu");
  bodyFormData.append('Description', "Descriere");
  bodyFormData.append('PhoneNumber', "07321");
  bodyFormData.append('Price', 0);
  bodyFormData.append('ServType', 'zi');


  console.log(bodyFormData);


  console.log(`${url}/CreateService`)

  axios({
    method: 'post',
    url: `${url}/CreateService`,
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${token}`},
  })
    .then(response => {
      console.log("\n\nRASPUNS\n\n")

      console.log('\n\n');
      // console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      // console.log(response.headers);
      // console.log(response.config);
    })
    .catch(err => {
      console.log("\n\nEROARE\n\n")
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        // console.log('aici');
        // console.log(err.response.headers);
      }
      console.log(err.message);
      // console.log(err.request);
      // console.log(err.config);
    });













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
  // });
  // axios({
  //   method: 'post',
  //   url: `${url}/CreateService`,
  //   data: bodyFormData,
  //   headers: { 'Content-Type': 'multipart/form-data' },
  // })
  //   .then(response => {
  //     //handle success
  //     console.log(response);
  //   })
  //   .catch(err => {
  //     //handle error
  //     console.log(err);
  //   });

  // Axios.post(`${url}/CreateService`, bodyFormData)
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });


};
