import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import Dropdown from './src/components/Dropdown/Dropdown';
import Catalog from './src/views/Catalog/Catalog';
import Post from './src/views/Post/Post';
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Catalog /> */}
        <Post />
        {/* <Dropdown options={['Lei', 'Euro', 'USD', 'GBP']} /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
