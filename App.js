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
import Catalog from './src/views/Catalog/Catalog';
import Post from './src/views/Post/Post';
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Catalog /> */}
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
