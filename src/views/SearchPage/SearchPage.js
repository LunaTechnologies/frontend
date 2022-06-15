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
import SearchBar from '../../components/SearchBar/SearchBar';

// Components
import Price from '../../components/Price/Price';

// Packages
import { useRoute } from '@react-navigation/native';

// Helpers

// Contexts + Styles
import SearchPageStyles from './SearchPageStyles';

const { width, height } = Dimensions.get('window');

const SearchPage = () => {
  // States
  const [search, setSearch] = useState('');
  const route = useRoute();
  const data = route.params.data;
  // const identificationString = id || route.params.id;
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <SafeAreaView>
      <SearchBar
        state={[search, setSearch]}
        style={SearchPageStyles.searchBar}
      />

      <View>
        {data.map((value, index) => {
          return (
            <TouchableOpacity key={index}>
              <Image
                style={SearchPageStyles.image}
                source={{ uri: value.thumbnailPath.path }}
              />
              <Text>{value.title}</Text>
              <Price service={value} />
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default SearchPage;
