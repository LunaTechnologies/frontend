import React, { useState, useContext, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';

// Components

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
      <SearchBar state={[search, setSearch]} style={{ width: '80%' }} />

      <View>
        {data.map((value, index) => {
          return <Text key={index}>{value.title}</Text>;
        })}
      </View>
      {/* <Text>{data}</Text> */}
    </SafeAreaView>
  );
};

export default SearchPage;
