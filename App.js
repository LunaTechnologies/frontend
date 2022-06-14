import React from 'react';

import Login from './src/views/Login/Login';
import Home from './src/views/Home/Home';
import ServicePage from './src/views/ServicePage/ServicePage';
import Post from './src/views/Post/Post';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PostProvider } from './src/contexts/PostContext';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <PostProvider>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Service"
            component={ServicePage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="PostService"
            component={Post}
          />
        </Stack.Navigator>
      </PostProvider>
    </NavigationContainer>
  );
};

export default App;
