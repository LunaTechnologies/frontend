import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import Login from '../Login';

test('render Login page', () => {
  const component = (
    <NavigationContainer>
    <Login />
    < /NavigationContainer>
  );
  const { debug } = render(component);
});
