import axios from 'axios';
import { RENTAL_API_URL } from '@env';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

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
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIzIiwibmFtZSI6ImY2NFNob3AiLCJyb2xlIjoiVXNlciIsIm5iZiI6MTY1NDQyNTk4OCwiZXhwIjoxNjU0NDI2NTg4LCJpYXQiOjE2NTQ0MjU5ODh9.tnTdf_iD-p7U1VcbaqvXrOXlRRLQ7L_pHsR71ga9b1A';

  const formData = new FormData();

  formData.append('pictures', images);
  formData.append('Title', title);
  formData.append('Description', description);
  formData.append('PhoneNumber', phoneNumber);
  formData.append('Price', parseFloat(price));
  formData.append('ServType', 'zi');

  const token = getToken();
  if (!token) {
    // TODO Handle error
    console.error('Token Error');
    return;
  }

  axios({
    method: 'post',
    url,
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
};

export { submitPost };
