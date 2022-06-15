import React, { useState, useEffect } from 'react';
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
import PageTitle from '../../components/PageTitle/PageTitle';
import SearchBar from '../../components/SearchBar/SearchBar';
import Tab from '../../components/Tab/Tab';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import Price from '../../components/Price/Price';

// Packages
import Icon from 'react-native-vector-icons/dist/Ionicons';
import IconAnt from 'react-native-vector-icons/dist/AntDesign';

// Helpers
import { getRandomServices } from '../../helper/GetRandomServices';

// Contexts + Styles
import SearchBarStyles from '../../components/SearchBar/SearchBarStyles';
import HomeStyles from './HomeStyles';
import ServiceCardStyles from '../../components/ServiceCard/ServiceCardStyles';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

const Home = () => {
  // States

  const tabOptions = ['Home', 'Office', 'Terace', 'Club'];
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [randomServices, setRandomServices] = useState([]);
  // const [specialOffer, setSpecialOffer] = useState({
  //   thumbnailPath: { path: '' },
  // });
  const [specialOffer, setSpecialOffer] = useState({});
  // Functions
  const filterOptions = () => {
    alert('Filter options are still under development!');
  };

  // Fetch Services
  const fetchRandomServices = (numberOfServices = 2) => {
    getRandomServices(numberOfServices)
      .then(res => {
        console.log('Get Random Services');
        console.log(res.data.length);
        setRandomServices(res.data);
      })
      .catch(err => {
        if (err.message.search('401') != -1) {
          refresh(tokenTest, refreshTest);
        }
        // console.error(err.response.data ? err.response.data : err);
      });
  };

  const fetchSpecialOffer = () => {
    getRandomServices(1)
      .then(res => {
        console.log('Get Special Service');
        setSpecialOffer(res.data[0]);
      })
      .catch(err => {
        if (err.message.search('401') != -1) {
          refresh(tokenTest, refreshTest);
        }
        // console.error(err.response.data ? err.response.data : err);
      });
  };

  useEffect(() => {
    fetchRandomServices(5);
    fetchSpecialOffer();
  }, []);

  // return <Text style={HomeStyles.loading}>Loading...</Text>;

  return randomServices.length == 0 ? (
    <Text style={HomeStyles.loading}>Loading...</Text>
  ) : (
    <ScrollView style={HomeStyles.global} keyboardShouldPersistTaps="handled">
      <View style={HomeStyles.titleContainer}>
        <PageTitle text="Catalog" style={HomeStyles.title} />
        <TouchableOpacity
          style={HomeStyles.addIconButton}
          onPress={() => navigation.navigate('PostService')}>
          <IconAnt name="pluscircleo" style={HomeStyles.addIcon} />
        </TouchableOpacity>
      </View>
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
      <View
        style={{
          ...HomeStyles.searchContainer,
          ...HomeStyles.textContainer,
        }}>
        <Text style={HomeStyles.subtitle}>New Offers For You</Text>
        <TouchableOpacity>
          <Text style={{ ...HomeStyles.subtitle, fontSize: 16 }}>View All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={HomeStyles.cardsContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {randomServices.map((service, index) => {
          return <ServiceCard key={index} service={service} />;
        })}
      </ScrollView>

      <Text
        style={{
          ...HomeStyles.textContainer,
          ...HomeStyles.subtitle,
        }}>
        Special Offer Just For You
      </Text>
      <View style={HomeStyles.specialOfferContainer}>
        <Image
          style={HomeStyles.specialOfferImage}
          source={{ uri: specialOffer.thumbnailPath.path }}
        />
        <View style={HomeStyles.specialOfferTextContainer}>
          <Price service={specialOffer} style={{ color: colors.white }} />
          <Text style={HomeStyles.specialOfferTitle}>{specialOffer.title}</Text>
          <TouchableOpacity
            style={HomeStyles.specialOfferButtonContainer}
            onPress={() => {
              navigation.navigate('Service', {
                id: specialOffer.identificationString,
              });
            }}>
            <Text style={HomeStyles.specialOfferButtonText}>Learn More!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
