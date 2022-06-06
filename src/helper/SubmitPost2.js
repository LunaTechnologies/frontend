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
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI0IiwibmFtZSI6InRlc3RfdXNlcm5hbWUiLCJyb2xlIjoiVXNlciIsIm5iZiI6MTY1NDQ5OTY5OCwiZXhwIjoxNjU0NTAwMjk4LCJpYXQiOjE2NTQ0OTk2OTh9.7vQqU8WbsHA07IgCXa7GA8Wtwf97RxMm1baOhjDoT5Q';
  const refreshTest = '3aEELS1mQCeRAjUL9EsHQucfyg9ZLiL3ODaH9/NKtxY=';

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
