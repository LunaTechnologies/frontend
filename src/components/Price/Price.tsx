import React, { useState, useContext, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

// Components

// Packages

// Helpers

// Contexts + Styles
import PriceStyles from './PriceStyles';

interface Props {
  service: any | undefined;
  style: any;
}

const Price = ({ service, style }: Props) => {
  // States

  return (
    <View style={PriceStyles.cardPriceContainer}>
      <Text style={{ ...PriceStyles.cardText, ...style }}>
        ${service.price}
      </Text>
      <Text
        style={{
          ...PriceStyles.cardText,
          ...PriceStyles.cardServType,
          ...style,
        }}>
        /{service.servType}
      </Text>
    </View>
  );
};

export default Price;
