import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../constants/colors';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {};
  const switchPage = () => {};

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
          <TextInput placeholder="username" style={styles.form.textInput} />
          <TextInput placeholder="password" style={styles.form.textInput} />
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
    padding: 20,
  },
  logoSection: {
    width,
    height: height * 0.1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 2,
  },
  logo: {
    width: 60,
    height: 60,
    backgroundColor: colors.black,
    borderRadius: 50,
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
    textInput: {
      width: width * 0.8,
      backgroundColor: colors.gray,
      borderRadius: 10,
      margin: 2,
      padding: 15,
      fontSize: 14,
    },

    bottomElements: {
      height: 0.2 * height,
      display: 'flex',
      justifyContent: 'space-between',
      // alignItems: 'center',
    },

    submit: {
      width: width * 0.8,
      height: 77,
      backgroundColor: colors.black,
      borderRadius: 20,
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
