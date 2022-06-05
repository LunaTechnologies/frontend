import axios from 'axios';
import { RENTAL_API_URL } from '@env';

const base = 'https://bcba-54-165-38-8.ngrok.io';

const submitPost = data => {
  const url = `${base}/api/Service/CreateService`;
  const { title, images, description, price, currency, payedPer, phoneNumber } =
    data;
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIzIiwibmFtZSI6ImY2NFNob3AiLCJyb2xlIjoiVXNlciIsIm5iZiI6MTY1NDQyNTk4OCwiZXhwIjoxNjU0NDI2NTg4LCJpYXQiOjE2NTQ0MjU5ODh9.tnTdf_iD-p7U1VcbaqvXrOXlRRLQ7L_pHsR71ga9b1A';

  const formattedData = {
    pictures: images,
    Title: title,
    Description: description,
    PhoneNumber: phoneNumber,
    Price: 0,
    Username: 'alexeu123',
    ServType: 'zi',
  };

  console.log(url);

  axios({
    method: 'post',
    url,
    data: formattedData,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
};

export { submitPost };
