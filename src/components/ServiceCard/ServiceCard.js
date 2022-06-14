import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Components
import Price from '../Price/Price';

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
  const navigation = useNavigation();

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
    <TouchableOpacity
      style={ServiceCardStyles.container}
      onPress={() => {
        navigation.navigate('Service', { id: service.identificationString });
      }}>
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

      <Price service={service} />
    </TouchableOpacity>
  );
};

export default ServiceCard;
