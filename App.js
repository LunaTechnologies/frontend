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

// Pages
import Home from './src/views/Home/Home';
import Login from './src/views/Login/Login';
// import ServicePage from './src/views/ServicePage/ServicePage';
import Post from './src/views/Post/Post';

// Contexts
import { PostProvider } from './src/contexts/PostContext';

const App = () => {
  return (
    <ScrollView>
      {/* <Login /> */}
      {/* <ServicePage id="Pc7kwl2FzOIooBH" /> */}
      {/* <ServicePage id="JpxBeQxT1Jlassq" /> */}
      <PostProvider>
        <Post />
      </PostProvider>
      {/* <Home /> */}
    </ScrollView>
  );
};

export default App;
