import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import PageTitleStyles from './PageTitleStyles';

const { width, height } = Dimensions.get('window');

const PageTitle = ({ text, style }) => {
  return <Text style={{ ...PageTitleStyles.title, ...style }}>{text}</Text>;
};

export default PageTitle;
