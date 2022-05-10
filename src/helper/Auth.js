import Axios from 'axios';

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
  }
  if (!passwordRegex.test(password)) {
    // Error with password
    error = true;
  }
  if (data['userName'] && data.userName === '') {
    // Error with empty username
    error = true;
  }
  if (data['confirmPassword'] && data.confirmPassword !== data.password) {
    // Error with confirm password
    error = true;
  }

  if (error) {
    // TODO Error Handling for the whole page
    return;
  } else return data;
};

const submit = (body, login) => {
  if (!body) return;

  const baseurl = 'https://9e51-54-165-38-8.ngrok.io/api/Auth';
  const endpoint = login ? '/login' : '/register';

  // Login callback function
  const loginClosure = res => {
    if (!res.data.success) {
      // TODO Error Handling
      return;
    }
    localStorage.setItem('accessToken', res.data.accessToken);
    localStorage.setItem('refreshToken', res.data.refreshToken);
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

  Axios.post(url, body, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(login ? loginClosure : registerClosure)
    .catch(err => console.error(err));
};

export { submit, validate };
