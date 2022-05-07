import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Keyboard,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../constants/colors';
import styles from './LoginStyles';

const { width, height } = Dimensions.get('window');

const Login = () => {
  const [login, setLogin] = useState(true);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [color, setColor] = useState(colors.gray);
  const [opacity, setOpacity] = useState(0);

  const [passwordEquality, setPasswordEquality] = useState(false);

  const submit = () => {};

  useEffect(() => {
    if (!username) {
      setColor(colors.gray);
      setOpacity(0);
    }

    Keyboard.addListener('keyboardDidHide', () => {
      Keyboard.dismiss();
    });

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
                placeholderTextColor={colors.black}
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
                placeholderTextColor={colors.black}
                style={styles.form.textInput}
                value={email}
                onChangeText={setEmail}
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
                      ? colors.lightGreen // Maybe change this
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

export default Login;
