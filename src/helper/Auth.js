import Axios from 'axios';
import { RENTAL_API_URL } from '@env';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

const apiurl = 'https://bcba-54-165-38-8.ngrok.io';

const validate = data => {
  const { email, password } = data;
  const emailRegex = new RegExp(
    '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
  );
  const passwordRegex = new RegExp(
    '^(?=.*[A-Z])(?=.*[W])(?=.*[0-9])(?=.*[a-z]).{8,128}$',
  );

  let error = false;

  if (!emailRegex.test(email)) {
    // Error with email
    error = true;
    console.log('ERR 1');
  }
  if (!passwordRegex.test(password)) {
    // Error with password
    // error = true;
    console.log(`ERR 2 ${password}`);
  }
  if (data['userName'] && data.userName === '') {
    // Error with empty username
    error = true;
    console.log('ERR 3');
  }
  if (data['confirmPassword'] && data.confirmPassword !== data.password) {
    // Error with confirm password
    error = true;
    console.log('ERR 4');
  }

  if (error) {
    // TODO Error Handling for the whole page
    console.log('Validity error');
    return;
  } else return data;
};

const submit = (body, login) => {
  if (!body) return;

  const baseurl = `${apiurl}/api/Auth`;
  const endpoint = login ? '/login' : '/register';

  // Login callback function
  const loginClosure = async res => {
    if (!res.data.success) {
      // TODO Error Handling
      return;
    }

    try {
      await AsyncStorage.setItem('accessToken', res.data.accessToken);
      await AsyncStorage.setItem('refreshToken', res.data.refreshToken);
    } catch (err) {
      console.error(err);
    }
    console.log(res.data);
  };

  // Register callback function
  const registerClosure = res => {
    if (res.data === 'Registered') {
      // TODO Switch to Login
      return;
    } else {
      // TODO Error Handling
    }
  };

  const url = `${baseurl}${endpoint}`;
  console.log(url);

  Axios.post(url, body, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(login ? loginClosure : registerClosure)
    .catch(err => console.error(err));
};

export { submit, validate };
