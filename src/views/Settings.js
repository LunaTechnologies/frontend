import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { colors } from '../constants/colors';

const { width, height } = Dimensions.get('window');

const Settings = () => {
  return (
    <SafeAreaView styles={styles.background}>
      <ScrollView>
        <View style={styles.imageSection}>
          <View style={styles.imageSection.image}></View>
        </View>
        <View style={styles.nameSection}>
          <Text style={styles.nameSection.name}>Danilo Tanic</Text>
          <Text style={styles.nameSection.email}>danilo@uscreen.tv</Text>
        </View>
        <View style={styles.editSection}>
          <TouchableOpacity style={styles.editSection.button}>
            <Text style={styles.editSection.button.text}>Edit Profile</Text>
            <View style={styles.editSection.button.icon}></View>
          </TouchableOpacity>
        </View>
        <View style={styles.mainSection}>
          <View style={styles.mainSection.contentSection}>
            <View style={styles.mainSection.title}>
              <Text style={styles.mainSection.title.text}>CONTENT</Text>
            </View>
            <TouchableOpacity style={styles.mainSection.button}>
              <Text style={styles.mainSection.button.text}>Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainSection.button}>
              <Text style={styles.mainSection.button.text}>Downloads</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mainSection.preferencesSection}>
            <View style={styles.mainSection.title}>
              <Text style={styles.mainSection.title.text}>PREFERENCES</Text>
            </View>
            <TouchableOpacity style={styles.mainSection.button}>
              <Text style={styles.mainSection.button.text}>Language</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainSection.button}>
              <Text style={styles.mainSection.button.text}>Dark Mode</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainSection.button}>
              <Text style={styles.mainSection.button.text}>
                Only Download via Wi-Fi
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainSection.button}>
              <Text style={styles.mainSection.button.text}>
                Play In Background
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    width,
    height,
  },
  imageSection: {
    width,
    height: 0.25 * height,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    image: {
      width: 75,
      height: 75,
      borderRadius: 50,
      backgroundColor: colors.blue,
    },
  },
  nameSection: {
    width,
    height: 0.12 * height,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    name: {
      fontSize: 22,
      color: colors.black,
    },
    email: {
      fontSize: 18,
    },
  },
  editSection: {
    width,
    height: 0.1 * height,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    button: {
      width: 180,
      height: 44,
      backgroundColor: colors.blue,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,

      text: {
        color: colors.white,
        fontSize: 16,
      },
      icon: {},
    },
  },
  mainSection: {
    paddingHorizontal: 20,
    title: {
      width: width * 0.9,
      height: 49,
      backgroundColor: colors.gray,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingLeft: 20,

      text: {
        fontSize: 12,
      },
    },
    button: {
      width: width * 0.9,
      height: 49,
      display: 'flex',
      justifyContent: 'center',
      text: { color: colors.black },
    },
    contentSection: {},
    preferencesSection: {},
  },
});

export default Settings;
