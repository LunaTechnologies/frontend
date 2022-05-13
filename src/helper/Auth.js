import Axios from 'axios';
import { RENTAL_API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiurl = 'https://bcba-54-165-38-8.ngrok.io';

const validate = (data, errors) => {
  const { email, password } = data;
  const emailRegex = new RegExp(
    '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
  );
  const checkPassword = password => {
    if (!(8 <= password.length && password.length <= 128)) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (!/[a-z]/.test(password)) return false;
    if (!/[0-9]/.test(password)) return false;
    if (!/[!@#$%^&*?<>]/.test(password)) return false;
    return true;
  };

  let error = false;

  if (!emailRegex.test(email)) {
    // Error with email
    error = true;
    errors.email.setEmailError(true);
  }
  if (!checkPassword(password)) {
    // Error with password
    error = true;
    errors.password.setPasswordError(true);
  }
  if (data.userName === '') {
    // Error with empty username
    error = true;
    errors.username.setUsernameError(true);
  }
  if (data.confirmPassword !== data.password) {
    // Error with confirm password
    error = true;
    errors.confirmPassword.setConfirmPasswordError(true);
  }

  return error ? null : data;
};

const submit = (body, login, errors) => {
  if (!body) return;

  const baseurl = `${apiurl}/api/Auth`;
  const endpoint = login ? '/login' : '/register';

  const { email, password, userName } = body;
  const formatBody = login
    ? {
        email,
        password,
      }
    : {
        userName,
        email,
        password,
        role: 'User',
      };

  // Login callback function
  const loginClosure = async res => {
    if (!res.data.success) {
      errors.login.setLoginError(true);
      return;
    }

    try {
      console.log(res.data.accessToken);
      await AsyncStorage.setItem('accessToken', res.data.accessToken);
      await AsyncStorage.setItem('refreshToken', res.data.refreshToken);
    } catch (err) {
      console.error(err);
    }
    // TODO Move to next page
    console.log('Login successfull');
  };

  // Register callback function
  const registerClosure = res => {
    console.log(res);
    if (res.data === 'Registered') {
      errors.login.setLogin(true);
      errors.register.setRegisterSuccess(true);
      return;
    } else {
      return;
    }
  };

  const url = `${baseurl}${endpoint}`;
  console.log(formatBody);

  Axios.post(url, formatBody, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(login ? loginClosure : registerClosure)
    .catch(err => {
      errors.register.setRegisterError({
        success: false,
        text: err.response.data,
      });
    });
};

const emailExists = (email, errors) => {
  Axios.get(`${apiurl}/api/User/emailExist`, { params: { email } })
    .then(({ data }) => errors.setEmailExist(data))
    .catch(() => {});
};

const usernameExists = (username, errors) => {
  Axios.get(`${apiurl}/api/User/usernameExist?username=${username}`)
    .then(({ data }) => errors.setUsernameExist(data))
    .catch(() => {});
};

export { submit, validate, emailExists, usernameExists };
