import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Text
} from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const App = () => {

  return (
    <SafeAreaView style = {styles.global}>
      <View style={styles.semiCircleLogo}></View>
      <Text style = {styles.title}>Hey, Login Now.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  global:{
    fontFamily: 'Poppins, sans-serif'
  },

  semiCircleLogo:{
    height: 0.05 * height,
    width: 0.1 * height,
    backgroundColor: 'black',
    marginTop: 0.1 * height,
    marginLeft: 0.02 * height,
    // borderRadius: '150px 150px 0 0',
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transform: [{rotate: '90deg'}, {scale: 0.7}],

  },


  title:{
    color: 'black',
    fontSize: 30,
    fontFamily: 'Overpass'
  },


});

export default App;
