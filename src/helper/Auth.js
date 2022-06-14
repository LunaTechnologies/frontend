import Axios from 'axios';
import { RENTAL_API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiurl = RENTAL_API_URL;

const validate = (data, login, state) => {
  const { email, password } = data;
  const emailRegex = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z.-]+.[a-zA-Z-.]+$');
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
    state.email.setEmailError(true);
  }
  if (!checkPassword(password)) {
    // Error with password
    error = true;
    state.password.setPasswordError(true);
  }
  if (data.userName === '') {
    // Error with empty username
    error = true;
    state.username.setUsernameError(true);
  }
  if (!login && data.confirmPassword !== data.password) {
    // Error with confirm password
    error = true;
    state.confirmPassword.setConfirmPasswordError(true);
  }

  if (!error) submit(data, login, state);
};

const submit = (body, login, state) => {
  if (!body) {
    // TODO Add error handling
    return;
  }

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
      state.login.setLoginError(true);
      return;
    }

    const { accessToken, refreshToken } = res.data;

    try {
      await AsyncStorage.setItem('accessToken', accessToken);
      await AsyncStorage.setItem('refreshToken', refreshToken);
      console.log(await AsyncStorage.getItem('refreshToken'));
      console.log('Login successfull');
      state.navigation.navigate('Home');
    } catch (err) {
      console.error('Error async storage: ', err);
    }
  };

  // Register callback function
  const registerClosure = res => {
    console.log(res);
    if (res.data === 'Registered') {
      state.login.setLogin(true);
      state.register.setRegisterSuccess(true);
      return;
    } else {
      return;
    }
  };

  const url = `${baseurl}${endpoint}`;

  Axios.post(url, formatBody, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(login ? loginClosure : registerClosure)
    .catch(err => {
      state.register.setRegisterError({
        success: false,
        text: err.response.data,
      });
    });
};

const emailExists = (email, state) => {
  Axios.get(`${apiurl}/api/User/emailExist`, { params: { email } })
    .then(({ data }) => state.setEmailExist(data))
    .catch(() => {});
};

const usernameExists = (username, state) => {
  Axios.get(`${apiurl}/api/User/usernameExist?username=${username}`)
    .then(({ data }) => state.setUsernameExist(data))
    .catch(() => {});
};

export { submit, validate, emailExists, usernameExists };
