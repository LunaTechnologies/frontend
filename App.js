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
import { PostProvider } from './src/contexts/PostContext';
import Catalog from './src/views/Catalog/Catalog';
import Post from './src/views/Post/Post';
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Catalog /> */}
        <PostProvider>
          <Post />
        </PostProvider>
        {/* <Dropdown options={['Lei', 'Euro', 'USD', 'GBP']} /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
