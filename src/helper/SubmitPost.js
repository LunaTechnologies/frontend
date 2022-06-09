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

  const refreshTest = 'shLuQH7DTHA2s5MM084JD1zaIZf+CjdsOKAtYYGy8sw=';

  const tokenTest =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIzIiwibmFtZSI6ImY2NFNob3AiLCJyb2xlIjoiVXNlciIsIm5iZiI6MTY1NDczNDczNCwiZXhwIjoxNjU0NzM1MzM0LCJpYXQiOjE2NTQ3MzQ3MzR9.of6ju_hWiPnzD4-_h4rHhaMxGvDX9xPy-oPMi-5vqd0';

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
