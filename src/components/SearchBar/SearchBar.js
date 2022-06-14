import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Components
import PageTitle from '../../components/PageTitle/PageTitle';
import Tab from '../../components/Tab/Tab';
import ErrorText from '../ErrorText/ErrorText';

// Packages
import Icon from 'react-native-vector-icons/dist/AntDesign';

// Helpers
import { searchService, searchService2 } from '../../helper/SearchByTitle';

// Contexts + Styles
import { colors } from '../../constants/colors';
import SearchBarStyles from './SearchBarStyles';

const SearchBar = ({ state, style }) => {
  // States
  const [search, setSearch] = state;
  const [errorNotFound, setErrorNotFound] = useState(false);

  const clearButtonCondition = search.toString().length > 0;
  const navigation = useNavigation();
  useEffect(() => {
    if (search === '') setErrorNotFound(false);
  }, [search]);

  return (
    <SafeAreaView
      style={{
        borderColor: errorNotFound ? colors.red : colors.black,
        ...SearchBarStyles.container,
        ...style,
      }}>
      <TouchableOpacity
        style={SearchBarStyles.searchIconContainer}
        onPress={() => {
          // searchService(search, setErrorNotFound)
          searchService2(search)
            .then(res => {
              console.log('aici');
              // console.log(res.data[0].title);
              navigation.navigate('SearchPage', { data: res.data });
            })
            .catch(err => {
              if (err.message.search('401') != -1) {
                refresh(tokenTest, refreshTest);
              }
              // console.error(err.response.data ? err.response.data : err);
            });
        }}>
        <Icon
          name="search1"
          style={{
            ...SearchBarStyles.searchIcon,
            color: errorNotFound ? colors.red : colors.black,
          }}
        />
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
          onPress={() => {
            setSearch('');
            setErrorNotFound(false);
          }}>
          <Icon
            name="close"
            style={{
              ...SearchBarStyles.searchIcon,
              color: errorNotFound && colors.red,
            }}
          />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default SearchBar;
