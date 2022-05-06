import React, { useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../constants/colors';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [color, setColor] = useState(colors.gray);
  const [opacity, setOpacity] = useState(0);

  const submit = () => {};
  const switchPage = () => {};

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
      <View style={styles.logoSection}>
        <View style={styles.logo}></View>
      </View>

      <View style={styles.title}>
        <Text style={styles.title.text}>Hey,</Text>
        <Text style={styles.title.text}>Login Now.</Text>
      </View>

      <View style={styles.subTitle}>
        <Text style={styles.subTitle.text}>If you are new / </Text>
        <TouchableOpacity style={styles.subTitle.button} onPress={switchPage}>
          <Text style={{ color: colors.black }}>Create New</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <View style={styles.form.inputFields}>
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
          <TextInput
            placeholder="Password"
            style={styles.form.textInput}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.form.bottomElements}>
          <View style={styles.subTitle}>
            <Text style={styles.subTitle.text}>Forgot Passcode? / </Text>
            <TouchableOpacity style={styles.subTitle.button}>
              <Text style={{ color: colors.black }}>Reset</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.form.submit} onPress={submit}>
            <Text style={styles.form.submit.text}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.skipSection}>
        <Text style={styles.skipSection.skip}>Skip now</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    width,
    height,
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
    height: height * 0.55,
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
      height: 0.2 * height,
      display: 'flex',
      justifyContent: 'space-between',
      // alignItems: 'center',
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
    height: height * 0.05,
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
