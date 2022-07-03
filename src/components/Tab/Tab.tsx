import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Components

// Packages

// Helpers

// Contexts + Styles

import TabStyles from './TabStyles';

interface Props {
  text: string;
}

const Tab = ({ text }: Props) => {
  // States

  return (
    <TouchableOpacity style={TabStyles.container}>
      <Text style={TabStyles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Tab;
