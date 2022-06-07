import axios from 'axios';
import { RENTAL_API_URL } from '@env';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { refresh } from '../utils/refreshToken';

const base = 'https://f6ef-54-165-38-8.ngrok.io';

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('accessToken');
    return token;
  } catch (err) {
    console.error('AsyncStorage error STATUS:', err); // TODO Handle errors better
  }
};

const submitPost = data => {
  const url = `${base}/api/Service/CreateService`;
  const { title, images, description, price, currency, payedPer, phoneNumber } =
    data;
  const tokenTest =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIzIiwibmFtZSI6ImY2NFNob3AiLCJyb2xlIjoiVXNlciIsIm5iZiI6MTY1NDU4MjM0OCwiZXhwIjoxNjU0NTgyOTQ4LCJpYXQiOjE2NTQ1ODIzNDh9.1rzhRxMRWGVPsdQFo65Y2QbvlnNqyCn-NskOsM4DtO8';
  const refreshTest = '9YN50pn7hAZq16Y9sl+U08+RakUz2S4YA3j4qYUhl7U=';

  const formData = new FormData();

  console.log(images)
  images.forEach(image => formData.append('pictures', {
    name: image.name,
    uri: image.uri,
    type: image.type
  }));
  formData.append('Title', title);
  formData.append('Description', description);
  formData.append('PhoneNumber', phoneNumber);
  formData.append('Price', parseFloat(price));
  formData.append('ServType', 'zi');

  // const token = getToken();
  // if (!token) {
  //   // TODO Handle error
  //   console.error('Token Error');
  //   return;
  // }

  axios({
    method: 'post',
    url,
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${tokenTest}`,
    },
  })
    .then(res => console.log(res.data))
    .catch(err => {
      if (err.message.search('401') != -1) {
        refresh(tokenTest, refreshTest);
      }
      console.error(err.response.data ? err.response.data : err);
    });
};

export { submitPost };
