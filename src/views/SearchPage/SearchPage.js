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
import { useNavigation } from '@react-navigation/native';

// Components
import Price from '../../components/Price/Price';
import SearchBar from '../../components/SearchBar/SearchBar';

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
  const navigation = useNavigation();

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <SafeAreaView style={SearchPageStyles.global}>
      <SearchBar
        state={[search, setSearch]}
        style={SearchPageStyles.searchBar}
      />

      <View style={SearchPageStyles.results}>
        {data.map((value, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={SearchPageStyles.resultContainer}
              onPress={() => {
                navigation.navigate('Service', {
                  id: value.identificationString,
                });
              }}>
              <Image
                style={SearchPageStyles.resultImage}
                source={{ uri: value.thumbnailPath.path }}
              />
              <View style={SearchPageStyles.resultDetails}>
                <Text style={SearchPageStyles.resultTitle}>{value.title}</Text>
                <Price service={value} />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default SearchPage;
