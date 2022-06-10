import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

// Components
import PageTitle from '../../components/PageTitle/PageTitle';
import Tab from '../../components/Tab/Tab';

// Packages
import Icon from 'react-native-vector-icons/dist/AntDesign';

// Helpers

// Contexts + Styles

import SearchBarStyles from './SearchBarStyles';

const { width, height } = Dimensions.get('window');

const SearchBar = ({ state, style }) => {
  // States
  const [search, setSearch] = state;
  const clearButtonCondition = search.toString().length > 0;
  const searchService = () => {
    alert(search);
  };

  return (
    <SafeAreaView style={{ ...SearchBarStyles.container, ...style }}>
      <TouchableOpacity
        style={SearchBarStyles.searchIconContainer}
        onPress={searchService}>
        <Icon name="search1" style={SearchBarStyles.searchIcon} />
      </TouchableOpacity>
      <TextInput
        style={{
          ...SearchBarStyles.textInput,
          width: clearButtonCondition ? '60%' : '80%',
        }}
        value={search.toString()}
        onChangeText={setSearch}
        placeholder={'Search Services'}
      />
      {clearButtonCondition && (
        <TouchableOpacity
          style={SearchBarStyles.searchIconContainer}
          onPress={() => setSearch('')}>
          <Icon name="close" style={SearchBarStyles.searchIcon} />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default SearchBar;
