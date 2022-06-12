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
import ServiceCardStyles from './ServiceCardStyles';

const { width, height } = Dimensions.get('window');

const ServiceCard = ({ service }) => {
  // States

  return (
    <TouchableOpacity style={ServiceCardStyles.container}>
      <Image
        style={ServiceCardStyles.image}
        // source={require('../../../assets/images/coolest-cars-feature.jpg')}
        source={{ uri: service.thumbnailPath.path }}
      />
      <Text>{service.price}</Text>

      <Text>{service.title}</Text>
      <Text>Rent per {service.servType}</Text>
    </TouchableOpacity>
  );
};

export default ServiceCard;
