import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
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

import { submit, validate } from '../../helper/Auth';

const { height } = Dimensions.get('window');

const Login = () => {
  // Page state: Signup or Login
  const [login, setLogin] = useState(true);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordEquality, setPasswordEquality] = useState(false);

  const [color, setColor] = useState(colors.gray);
  const [opacity, setOpacity] = useState(0);

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

  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        <View style={styles.logoSection}>
          <View style={styles.logo}></View>
        </View>

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
                style={{
                  ...styles.form.textInput,
                  ...{ backgroundColor: color }, // Add background color based on condition
                }}
                value={email}
                onChangeText={email => {
                  setEmail(email);
                  setColor(colors.lightOrange);
                  setOpacity(100);
                }}
              />
              <ErrorText text="Email is invalid" />
            </View>
            {!login && (
              <TextInput
                placeholder="Username"
                placeholderTextColor={colors.black}
                style={styles.form.textInput}
                value={username}
                onChangeText={setUsername}
              />
            )}
            <TextInput
              placeholder="Password"
              placeholderTextColor={colors.black}
              style={styles.form.textInput}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            {!login && (
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor={colors.black}
                style={{
                  ...styles.form.textInput,
                  ...{
                    backgroundColor: passwordEquality
                      ? colors.lightGreen // Highlight on matching password and confirmPassword
                      : colors.gray,
                  },
                }}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
              />
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

            <TouchableOpacity
              style={styles.form.submit}
              onPress={() => {
                submit(
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
                  ),
                  login,
                );
              }}>
              <Text style={styles.form.submit.text}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            ...styles.skipSection,
            ...{ height: (login ? 0.08 : 0.15) * height },
          }}>
          <TouchableOpacity style={styles.skipSection.skip}>
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
