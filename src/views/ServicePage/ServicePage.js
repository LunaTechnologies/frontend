import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './ServicePageStyles.js';
import { getData } from '../../helper/GetService';
import { colors } from '../../constants/colors';

import CarouselImage from '../../components/CarouselImages/CarouselImages';
import BackArrow from '../../components/BackArrow/BackArrow';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import SubmitButton from '../../components/SubmitButton/SubmitButton';

const { width, height } = Dimensions.get('window');

const ServicePage = ({ id }) => {
  const [data, setData] = useState({});
  const [descTooLong, setDescTooLong] = useState(true);
  const route = useRoute();
  const identificationString = id || route.params.id;

  const dummyData = [
    {
      path: 'https://codecool.com/wp-content/uploads/2021/09/Courses-Header.jpg',
    },
    {
      path: 'https://codecool.com/wp-content/uploads/2021/09/Courses-Header.jpg',
    },
    {
      path: 'https://codecool.com/wp-content/uploads/2021/09/Courses-Header.jpg',
    },
  ];

  useEffect(() => {
    getData(identificationString, setData, setDescTooLong);
  }, []);

  return (
    <SafeAreaView style={styles.background}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageSection}>
          <BackArrow color={colors.white} />
          <CarouselImage
            images={data.picturePaths ? data.picturePaths : dummyData}
            width={width}
            height={0.5 * height}
          />
        </View>
        <View>
          <View style={styles.titleSection}>
            <Text style={styles.titleSection.title}>{data.title}</Text>
          </View>
          <View style={styles.priceSection}>
            <Text style={styles.priceSection.price}>
              <Text style={styles.priceSection.valueStyle}>
                ${data.price + ' '}
              </Text>

              <Text style={styles.priceSection.lengthStyle}>
                / {data.servType}
              </Text>
            </Text>
          </View>

          <View style={styles.descriptionSection}>
            <Text style={styles.descriptionSection.title}>Description</Text>
            {data.description == null ? (
              <Text>no description</Text>
            ) : (
              <View style={styles.descriptionSection.descriptionContainer}>
                <Text style={styles.descriptionSection.description}>
                  {data.description}
                </Text>
              </View>
            )}
          </View>

          <View style={styles.ownerSection}>
            <Image
              style={styles.ownerSection.image}
              source={{
                uri: 'https://codecool.com/wp-content/uploads/2021/09/Courses-Header.jpg',
              }}
            />
            <View style={styles.ownerSection.info}>
              <Text style={styles.ownerSection.info.text}>Owner</Text>
              <Text style={styles.ownerSection.info.name}>{data.username}</Text>
            </View>
            <View style={styles.ownerSection.messageButtonContainer}>
              <TouchableOpacity style={styles.ownerSection.messageButton}>
                <Icon
                  name="chatbox-outline"
                  style={styles.ownerSection.messageIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.phoneSection}>
            <Text style={styles.phoneSection.title}>Phone Number: </Text>
            <Text style={styles.phoneSection.number}>{data.phoneNumber}</Text>
          </View>
          {/* <View style={styles.rentSection}>
            <TouchableOpacity style={styles.rentSection.button}>
              <Text style={styles.rentSection.text}>Rent</Text>
            </TouchableOpacity>
          </View> */}
          <SubmitButton
            text="Rent"
            onPress={() => {
              alert('Rented!');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ServicePage;
