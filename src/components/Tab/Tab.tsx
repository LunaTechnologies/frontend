import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

// Components

// Packages

// Helpers

// Contexts + Styles

import TabStyles from './TabStyles';

const { width, height } = Dimensions.get('window');

const Tab = ({ text }) => {
  // States

  return (
    <TouchableOpacity style={TabStyles.container}>
      <Text style={TabStyles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Tab;
