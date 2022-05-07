import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './SettingsStyles';

const Settings = () => {
  return (
    <SafeAreaView style={styles.background}>
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

export default Settings;
