import axios from 'axios';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

const refresh = async (access = null, refresh = null) => {
  const base = 'https://f6ef-54-165-38-8.ngrok.io';
  try {
    let accessToken = access;
    let refreshToken = refresh;
    if (!access) accessToken = await AsyncStorage.getItem('accessToken');
    if (!refresh) refreshToken = await AsyncStorage.getItem('refreshToken');

    axios
      .post(`${base}/api/Auth/refresh`, { accessToken, refreshToken })
      .then(async res => {
        const newToken = res.data;
        console.log(newToken);
        await AsyncStorage.setItem('accessToken', newToken);
      })
      .catch(err => console.error(err));
  } catch (err) {
    console.error('refreshToken error: ', err);
  }
};

export { refresh };
