import React, { useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Keyboard,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../constants/colors';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Login = () => {
  const [login, setLogin] = useState(true);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [color, setColor] = useState(colors.gray);
  const [opacity, setOpacity] = useState(0);

  const submit = () => {};

  useEffect(() => {
    if (!username) {
      setColor(colors.gray);
      setOpacity(0);
    }

    Keyboard.addListener('keyboardDidHide', () => {
      Keyboard.dismiss();
    });
  }, [username]);

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
          <Text style={styles.subTitle.text}>If you are new / </Text>
          <TouchableOpacity
            style={styles.subTitle.button}
            onPress={() => {
              setLogin(!login);
            }}>
            <Text style={{ color: colors.black }}>Create New</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...styles.form,
            ...{ height: (login ? 0.55 : 0.6) * height },
          }}>
          <View
            style={{
              ...styles.form.inputFields,
              ...{ height: (login ? 0.3 : 0.5) * height },
            }}>
            <View style={styles.form.usernameField}>
              <TouchableOpacity
                style={{ ...styles.form.iconUsername, ...{ opacity } }}
                onPress={() => {
                  setUsername('');
                }}
              />
              <TextInput
                placeholder="Username"
                style={{
                  ...styles.form.textInput,
                  ...{ backgroundColor: color },
                }}
                value={username}
                onChangeText={username => {
                  setUsername(username);
                  setColor(colors.lightOrange);
                  setOpacity(100);
                }}
              />
            </View>
            {!login && (
              <TextInput
                placeholder="Email"
                style={styles.form.textInput}
                value={email}
                onChangeText={setEmail}
              />
            )}
            <TextInput
              placeholder="Password"
              style={styles.form.textInput}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            {!login && (
              <TextInput
                placeholder="Confirm Password"
                style={styles.form.textInput}
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

            <TouchableOpacity style={styles.form.submit} onPress={submit}>
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

const styles = StyleSheet.create({
  background: {
    width,
    // height,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  logoSection: {
    width,
    height: height * 0.1,
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  logo: {
    height: 0.05 * height,
    width: 0.1 * height,
    backgroundColor: colors.black,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transform: [{ rotate: '90deg' }, { scale: 0.7 }],

    position: 'absolute',
    left: -20,
  },

  title: {
    fontSize: 30,
    width,
    height: height * 0.2,
    display: 'flex',
    justifyContent: 'center',
    text: { fontSize: 30, color: colors.black },
  },

  subTitle: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 14,

    text: {
      color: colors.darkGray,
    },
    button: {},
  },

  form: {
    height: height * 0.7,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    inputFields: {
      width,
      height: 0.3 * height,
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    usernameField: {
      position: 'relative',
      borderRadius: 10,
    },
    textInput: {
      width: width * 0.8,
      backgroundColor: colors.gray,
      borderRadius: 10,
      margin: 2,
      padding: 15,
      fontSize: 14,
    },
    iconUsername: {
      width: 25,
      height: 25,
      borderRadius: 50,
      backgroundColor: colors.blue,
      position: 'absolute',
      right: 10,
      top: '50%',
      // transform: translateY(-50%);
      transform: [{ translateY: -25 / 2 }],
      zIndex: 1,
      opacity: 0,
    },

    bottomElements: {
      // height: 0.2 * height,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    submit: {
      width: width * 0.8,
      height: 65,
      backgroundColor: colors.black,
      borderRadius: 12,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      text: {
        fontSize: 20,
        color: colors.white,
      },
    },
  },

  skipSection: {
    height: height * 0.08,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    skip: {
      fontSize: 18,
      color: colors.darkGray,
    },
  },
});

export default Login;
