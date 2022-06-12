import React, { useState, useContext, useEffect } from 'react';
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
import { getRandomServices } from '../../helper/GetRandomServices';

// Contexts + Styles
import SearchBarStyles from '../../components/SearchBar/SearchBarStyles';
import HomeStyles from './HomeStyles';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

const { width, height } = Dimensions.get('window');

const Home = () => {
  // States

  const tabOptions = ['Home', 'Office', 'Terace', 'Club'];
  const [search, setSearch] = useState('');
  const [randomServices, setRandomServices] = useState([]);

  // Functions
  const filterOptions = () => {
    alert('Filter options are still under development!');
  };

  // Fetch ServTypes
  const fetchRandomServices = (numberOfServices = 2) => {
    getRandomServices(numberOfServices)
      .then(res => {
        console.log('Get Random Services');
        console.log(res.data[0]);
        setRandomServices(res.data);
      })
      .catch(err => {
        if (err.message.search('401') != -1) {
          refresh(tokenTest, refreshTest);
        }
        console.error(err.response.data ? err.response.data : err);
      });
  };

  useEffect(() => {
    fetchRandomServices();
  }, []);

  return (
    <SafeAreaView>
      <PageTitle text="Catalog" style={HomeStyles.title} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
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
      <View style={{ ...HomeStyles.searchContainer, height: 'auto' }}>
        {randomServices.map((service, index) => {
          return <ServiceCard key={index} service={service} />;
        })}
      </View>
    </SafeAreaView>
  );
};

export default Home;
