import axios from 'axios';
import { RENTAL_API_URL } from '@env';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { refresh } from '../utils/refreshToken';

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('accessToken');
    return token;
  } catch (err) {
    console.error('AsyncStorage error STATUS:', err); // TODO Handle errors better
  }
};

export const submitPost = data => {
  const url = `${RENTAL_API_URL}/api/Service/CreateService`;
  const { title, images, description, price, currency, payedPer, phoneNumber } =
    data;

  const refreshTest = 'DiECOWvvK0r8HGPpeT5k2VnuHDQHZxJ+pSVwck8bMgM=';

  const tokenTest =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIzIiwibmFtZSI6ImY2NFNob3AiLCJyb2xlIjoiVXNlciIsIm5iZiI6MTY1NDg1MDEyNywiZXhwIjoxNjU0ODUwNzI3LCJpYXQiOjE2NTQ4NTAxMjd9.MPbFTGwnZHJbm5JD-r7nuu02aQcLtu9ptq4H5gXxSUg';

  const formData = new FormData();

  console.log(images);

  images.forEach(image =>
    formData.append('pictures', {
      name: image.name,
      uri: image.uri,
      type: image.type,
    }),
  );
  formData.append('Title', title);
  formData.append('Description', description);
  formData.append('PhoneNumber', phoneNumber);
  formData.append('Price', parseFloat(price));
  formData.append('ServType', 'Day');

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
