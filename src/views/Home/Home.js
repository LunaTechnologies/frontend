import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

// Components
import PageTitle from '../../components/PageTitle/PageTitle';
import SearchBar from '../../components/SearchBar/SearchBar';
import Tab from '../../components/Tab/Tab';
// Packages
import Icon from 'react-native-vector-icons/dist/Ionicons';

// Helpers

// Contexts + Styles
import SearchBarStyles from '../../components/SearchBar/SearchBarStyles';
import HomeStyles from './HomeStyles';

const { width, height } = Dimensions.get('window');

const Home = () => {
  // States

  const tabOptions = ['Home', 'Office', 'Terace', 'Club'];
  const [search, setSearch] = useState('');

  const filterOptions = () => {
    alert('Filter options are still under development!');
  };

  return (
    <SafeAreaView>
      <PageTitle text="Catalog" style={HomeStyles.title} />
      <ScrollView
        style={HomeStyles.tabs}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {tabOptions.map((tab, index) => {
          return <Tab key={index} text={tab} />;
        })}
      </ScrollView>

      <View style={HomeStyles.searchContainer}>
        <SearchBar state={[search, setSearch]} style={{ width: '80%' }} />
        <TouchableOpacity
          onPress={filterOptions}
          style={HomeStyles.filterOptionsContainer}>
          <Icon
            name="options"
            style={{
              ...SearchBarStyles.searchIcon,
              ...HomeStyles.filterOptionsIcon,
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
