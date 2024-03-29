import React, { useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Keyboard,
  Platform,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ErrorText from '../../components/ErrorText/ErrorText';
import { colors } from '../../constants/colors';
import styles from './LoginStyles';

import { emailExists, usernameExists, validate } from '../../helper/Auth';

const { height } = Dimensions.get('window');

const Login = ({ navigation }) => {
  // Page state: Signup or Login
  const [login, setLogin] = useState(true);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordEquality, setPasswordEquality] = useState(false);

  const [color, setColor] = useState(colors.gray);
  const [opacity, setOpacity] = useState(0);

  const [emailError, setEmailError] = useState(false);
  const [emailExist, setEmailExist] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [usernameExist, setUsernameExist] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const [loginError, setLoginError] = useState(false);
  const [registerError, setRegisterError] = useState({
    status: true,
    test: '',
  });
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const state = {
    email: { setEmailError },
    password: { setPasswordError },
    username: { setUsernameError },
    confirmPassword: { setConfirmPasswordError },
    login: { setLoginError, setLogin },
    register: {
      setRegisterError,
      setRegisterSuccess,
    },
    exist: { setEmailExist, setUsernameExist },
    navigation,
  };

  const errorMessageStatus = {
    emailError: setEmailError,
    passwordError: setPasswordError,
    usernameError: setUsernameError,
    confirmPasswordError: setConfirmPasswordError,

    loginError: setLoginError,
  };

  useEffect(() => {
    if (!username) {
      setColor(colors.gray);
      setOpacity(0);
    }

    // Drop focus on keyboard hide only on android
    if (Platform.OS === 'android') {
      Keyboard.addListener('keyboardDidHide', () => {
        Keyboard.dismiss();
      });
    }

    setPasswordEquality(password !== '' && password == confirmPassword);
  }, [username, password, confirmPassword]);

  // Reset all errors
  const resetErrors = () => {
    Object.entries(errorMessageStatus).forEach(([error, setError]) => {
      if (error) setError(false);
    });
  };

  return (
    <SafeAreaView style={styles.background}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View style={styles.logoSection}>
          <View style={styles.logo}></View>
        </View> */}

        <Image
          style={styles.imageLogo}
          source={require('../../../assets/images/logo.png')}
        />

        <View style={styles.title}>
          <Text style={styles.title.text}>Hey,</Text>
          <Text style={styles.title.text}>
            {login ? 'Login' : 'Signup'} Now.
          </Text>
        </View>

        <View style={styles.subTitle}>
          <Text style={styles.subTitle.text}>
            {login ? 'If you are new' : 'Already have an account?'} /{' '}
          </Text>
          <TouchableOpacity
            style={styles.subTitle.button}
            onPress={() => {
              setLogin(!login);
              resetErrors();
            }}>
            <Text style={{ color: colors.black }}>
              {login ? 'Create New' : 'Login'}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...styles.form,
            ...{ height: (login ? 0.55 : 0.6) * height }, // Change styles on page switch(Signup or Login)
          }}>
          <View
            style={{
              ...styles.form.inputFields,
              ...{ height: (login ? 0.3 : 0.5) * height },
            }}>
            <View style={styles.form.emailField}>
              <TouchableOpacity
                style={{ ...styles.form.iconUsername, ...{ opacity } }}
                onPress={() => {
                  setUsername('');
                }}
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor={colors.black}
                clearTextOnFocus={false}
                autoCapitalize="none"
                style={{
                  ...styles.form.textInput,
                  ...{ backgroundColor: color }, // Add background color based on condition
                  ...{
                    borderColor:
                      (!login && emailExist) || emailError
                        ? colors.red
                        : colors.gray,
                  },
                }}
                value={email}
                onChangeText={email => {
                  setEmail(email);
                  setColor(colors.lightOrange);
                  setOpacity(100);
                  emailExists(email, state.exist);
                }}
                onSubmitEditing={() => {
                  if (!login) usernameRef.current.focus();
                  else passwordRef.current.focus();
                }}
                blurOnSubmit={false}
              />
              {emailError && <ErrorText text="Email is invalid" />}
            </View>
            {!login && (
              <View style={styles.flex}>
                <TextInput
                  placeholder="Username"
                  placeholderTextColor={colors.black}
                  autoCapitalize="none"
                  clearTextOnFocus={false}
                  style={{
                    ...styles.form.textInput,
                    ...{
                      borderColor:
                        (!login && usernameExist) || usernameError
                          ? colors.red
                          : colors.gray,
                    },
                  }}
                  value={username}
                  onChangeText={username => {
                    setUsername(username);
                    usernameExists(username, state.exist);
                  }}
                  ref={usernameRef}
                  onSubmitEditing={() => {
                    passwordRef.current.focus();
                  }}
                  blurOnSubmit={false}
                />
                {usernameError && <ErrorText text="Username cannot be empty" />}
              </View>
            )}
            <View style={styles.flex}>
              <TextInput
                placeholder="Password"
                placeholderTextColor={colors.black}
                autoCapitalize="none"
                clearTextOnFocus={false}
                style={{
                  ...styles.form.textInput,
                  ...{
                    borderColor: passwordError ? colors.red : colors.gray,
                  },
                }}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                ref={passwordRef}
                onSubmitEditing={() => {
                  if (!login) confirmPasswordRef.current.focus();
                }}
                blurOnSubmit={login ? true : false}
              />
              {passwordError && (
                <ErrorText text="Password must contain a number, a special character, a lower- and upper-case letter and be at least 8 characters long" />
              )}
            </View>
            {!login && (
              <View style={styles.flex}>
                <TextInput
                  placeholder="Confirm Password"
                  placeholderTextColor={colors.black}
                  autoCapitalize="none"
                  clearTextOnFocus={false}
                  style={{
                    ...styles.form.textInput,
                    ...{
                      backgroundColor: passwordEquality
                        ? colors.lightGreen // Highlight on matching password and confirmPassword
                        : colors.gray,
                    },
                    ...{
                      borderColor: confirmPasswordError
                        ? colors.red
                        : colors.gray,
                    },
                  }}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={true}
                  ref={confirmPasswordRef}
                />
                {confirmPasswordError && (
                  <ErrorText text="Passwords do not match" />
                )}
              </View>
            )}
          </View>

          <View
            style={{
              ...styles.form.bottomElements,
              ...{ height: (login ? 0.2 : 0.05) * height },
            }}>
            {login && (
              <View style={styles.subTitle}>
                <Text style={styles.subTitle.text}>Forgot Passcode? / </Text>
                <TouchableOpacity style={styles.subTitle.button}>
                  <Text style={{ color: colors.black }}>Reset</Text>
                </TouchableOpacity>
              </View>
            )}
            {login && loginError && (
              <ErrorText text="Login failed! Try again..." />
            )}

            {login && registerSuccess && (
              <ErrorText text="Registered successfully!" success={true} />
            )}

            {!login && !registerError.status && (
              <ErrorText text={registerError.text} />
            )}

            <TouchableOpacity
              style={styles.form.submit}
              onPress={() => {
                validate(
                  login
                    ? {
                        email,
                        password,
                      }
                    : {
                        userName: username,
                        email,
                        password,
                        confirmPassword,
                      },
                  login,
                  state,
                );
              }}>
              <Text style={styles.form.submit.text}>
                {login ? 'Login' : 'Signup'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            ...styles.skipSection,
            ...{ height: (login ? 0.08 : 0.15) * height },
          }}>
          <TouchableOpacity
            style={styles.skipSection.skip}
            onPress={() => navigation.navigate('Home')}>
            <Text
              style={{
                fontSize: 18,
                color: colors.darkGray,
              }}>
              Skip now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
