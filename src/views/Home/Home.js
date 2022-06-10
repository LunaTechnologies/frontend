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

// Helpers

// Contexts + Styles

import HomeStyles from './HomeStyles';

const { width, height } = Dimensions.get('window');

const Home = () => {
  // States

  const tabOptions = ['Home', 'Office', 'Terace', 'Club'];
  const [search, setSearch] = useState('');
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
      <SearchBar
        state={[search, setSearch]}
        style={{ marginTop: 20, marginBotton: 20 }}
      />
    </SafeAreaView>
  );
};

export default Home;
