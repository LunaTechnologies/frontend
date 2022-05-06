import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Catalog from './src/views/Catalog/Catalog';

const App = () => {
  return (
    <SafeAreaView>
      <Catalog />
    </SafeAreaView>
  );
};

export default App;
