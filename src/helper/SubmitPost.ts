import axios from 'axios';
import { RENTAL_API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { refresh } from '../utils/refreshToken';

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('accessToken');
    return token;
  } catch (err) {
    console.error('AsyncStorage error STATUS:', err); // TODO Handle errors better
  }
};

const getRefreshToken = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    return refreshToken;
  } catch (err) {
    console.error('AsyncStorage error STATUS:', err); // TODO Handle errors better
  }
};

export const submitPost = (data, navigation) => {
  const url = `${RENTAL_API_URL}/api/Service/CreateService`;
  const { title, images, description, price, currency, payedPer, phoneNumber } =
    data;

  const tokenTest =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI1IiwibmFtZSI6InRlc3QxMjM0Iiwicm9sZSI6IlVzZXIiLCJuYmYiOjE2NTUyMjAxNTcsImV4cCI6MTY1NTIyMDc1NywiaWF0IjoxNjU1MjIwMTU3fQ.rs4acfkpz1Mv0vCJG1UIthTmX0Suq4tIJhHPYiJhEEI';
  const refreshTest = 'R4XENzENTlVJEiH+xZEoEVvPU4SS8LE6+sE7yfeFHEs= ';

  const token = typeof getToken() === 'string' ? getToken() : tokenTest;
  const refreshToken =
    typeof getRefreshToken() === 'string' ? getRefreshToken() : refreshTest;

  const formData = new FormData();

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
  formData.append('ServType', payedPer);

  axios({
    method: 'post',
    url,
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => navigation.navigate('Service', { id: res.data }))
    .catch(err => {
      if (err.message.search('401') != -1) {
        refresh(token, refreshToken);
      }
      console.error(err.response.data ? err.response.data : err);
    });
};

export const getServiceTypes = () => {
  const url = `${RENTAL_API_URL}/api/RentalType/GetAllRentalTypes`;
  return axios({
    method: 'get',
    url,
  });
};
