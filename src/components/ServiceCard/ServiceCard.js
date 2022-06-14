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
import { colors } from '../../constants/colors';

const ServiceCard = ({ service }) => {
  // States
  const [favoriteIconStyles, setFavoriteIconStyles] = useState({});
  const [addFavorite, setAddFavorite] = useState(false);

  // Functions
  const favoriteIconOnPress = () => {
    setAddFavorite(!addFavorite);
    if (!addFavorite)
      setFavoriteIconStyles({
        color: 'red',
        backgroundColor: 'rgba(0,0,0,0)',
        //   fontSize: 22,
      });
    else setFavoriteIconStyles({});
    //   alert('Added to Favorites!');
  };

  return (
    <TouchableOpacity style={ServiceCardStyles.container}>
      <Image
        style={ServiceCardStyles.image}
        source={{ uri: service.thumbnailPath.path }}
      />
      <TouchableOpacity
        onPress={favoriteIconOnPress}
        style={ServiceCardStyles.favoriteIconContainer}>
        <Icon
          name={addFavorite ? 'heart' : 'hearto'}
          style={{
            ...ServiceCardStyles.favoriteIcon,
            ...favoriteIconStyles,
          }}
        />
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
