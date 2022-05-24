import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './ServicePageStyles.js';
import { getData } from '../../helper/GetService';

const ServicePage = ({ id }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    getData(id, setData);
  }, []);

  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        <View style={styles.imageSection}>
          {/* {data.picturePaths &&
       data.picturePaths.forEach(pic => (*/}
          <Image
            style={styles.imageSection.image}
            source={{
              uri: 'https://codecool.com/wp-content/uploads/2021/09/Courses-Header.jpg',
            }}
          />

          <Image
            style={styles.imageSection.image}
            source={{
              uri: 'https://codecool.com/wp-content/uploads/2021/09/Courses-Header.jpg',
            }}
          />
          {/* ))}*/}
        </View>
        <View>
          <View style={styles.titleSection}>
            <Text style={styles.titleSection.title}>{data.title}</Text>
          </View>
          <View style={styles.priceSection}>
            <Text style={styles.priceSection.price}>
              {data.price}/{data.servType}
            </Text>
          </View>
          <View style={styles.descriptionSection}>
            <Text style={styles.descriptionSection.title}>Description</Text>
            <View style={styles.descriptionSection.descriptionContainer}>
              <Text style={styles.descriptionSection.description}>
                {data.description}
              </Text>
            </View>
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
          </View>
          <View style={styles.ownerSection.messageButtonContainer}>
            <TouchableOpacity style={styles.ownerSection.messageButton}>
              <Text>Icon</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.phoneSection}>
            <Text style={styles.phoneSection.title}>Phone Number: </Text>
            <Text style={styles.phoneSection.number}>{data.phoneNumber}</Text>
          </View>
          <View style={styles.rentSection}>
            <TouchableOpacity style={styles.rentSection.button}>
              <Text style={styles.rentSection.text}>Rent</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ServicePage;
