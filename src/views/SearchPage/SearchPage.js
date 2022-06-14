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
import SearchPageStyles from './SearchPageStyles';

const { width, height } = Dimensions.get('window');

const SearchPage = ({ data }) => {
  // States

  return (
    <SafeAreaView>
      <Text>search</Text>
      {/* <SearchBar /> */}
      {/* <View>
        {data.map((value, index) => {
          return <Text key={index}>{value.title}</Text>;
        })}
      </View> */}
    </SafeAreaView>
  );
};

export default SearchPage;
