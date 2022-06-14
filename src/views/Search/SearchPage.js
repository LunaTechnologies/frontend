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

// Helpers

// Contexts + Styles
import SearchStyles from './SearchPageStyles';

const { width, height } = Dimensions.get('window');

const SearchPage = props => {
  // States
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView>
      <SearchBar state={[search, setSearch]} style={{ width: '80%' }} />
      {/* {props.data.map((value, index) => {
        return <Text key={index}>{value.title}</Text>;
      })} */}
    </SafeAreaView>
  );
};

export default SearchPage;
