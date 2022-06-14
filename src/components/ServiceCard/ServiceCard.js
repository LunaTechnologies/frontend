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
import Icon from 'react-native-vector-icons/dist/AntDesign';

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
      <TouchableOpacity
        onPress={() => {
          alert('Added to Favorites!');
        }}
        style={ServiceCardStyles.favoriteIconContainer}>
        <Icon name="hearto" style={ServiceCardStyles.favoriteIcon} />
      </TouchableOpacity>

      <Text style={{ ...ServiceCardStyles.cardText }}>{service.title}</Text>
      <View style={ServiceCardStyles.cardPriceContainer}>
        <Text style={{ ...ServiceCardStyles.cardText }}>${service.price}</Text>
        <Text
          style={{
            ...ServiceCardStyles.cardText,
            ...ServiceCardStyles.cardServType,
          }}>
          /{service.servType}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ServiceCard;
