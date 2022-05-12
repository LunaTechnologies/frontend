import React from 'react';
import { SafeAreaView } from 'react-native';
import AuthProvider from './src/context/authContext';
import Login from './src/views/Login/Login';

const App = () => {
  return (
    <SafeAreaView>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </SafeAreaView>
  );
};

export default App;
