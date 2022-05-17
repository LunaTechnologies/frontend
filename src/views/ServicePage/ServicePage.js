import React from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './ServicePageStyles.js';

const ServicePage = () => {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        <View style={styles.imageSection}>
          <Image
            style={styles.imageSection.image}
            source={{
              uri: 'https://codecool.com/wp-content/uploads/2021/09/Courses-Header.jpg',
            }}
          />
        </View>
        <View>
          <View style={styles.titleSection}>
            <Text style={styles.titleSection.title}>Vintage Orange Phone</Text>
          </View>
          <View style={styles.priceSection}>
            <Text style={styles.priceSection.price}>$28/mo</Text>
          </View>
          <View style={styles.descriptionSection}>
            <Text style={styles.descriptionSection.title}>Description</Text>
            <View style={styles.descriptionSection.descriptionContainer}>
              <Text style={styles.descriptionSection.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. read more...
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
              <Text style={styles.ownerSection.info.name}>Michael Orlando</Text>
            </View>
          </View>
          <View style={styles.ownerSection.messageButtonContainer}>
            <ToucableOpacity style={styles.ownerSection.messageButton}>
              Icon // TODO Add Icon
            </ToucableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ServicePage;
