import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

// Components
import BackArrow from '../../components/BackArrow/BackArrow';
import PostField from '../../components/PostField/PostField';
import PostFieldTitle from '../../components/PostFieldTitle/PostFieldTitle';
import PostFieldTextInput from '../../components/PostFieldTextInput/PostFieldTextInput';
import Dropdown from '../../components/Dropdown/Dropdown';
import Switch from '../../components/Switch/Switch';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import PageTitle from '../../components/PageTitle/PageTitle';

// Packages
import Icon from 'react-native-vector-icons/dist/AntDesign';
import * as ImagePicker from 'react-native-image-picker';

// Helpers
import { submitPost } from '../../helper/SubmitPost';

// Contexts + Styles
import { PostContext } from '../../contexts/PostContext';
import PostStyles from './PostStyles';

const { width, height } = Dimensions.get('window');

const Post = () => {
  // States
  const { title, setTitle } = useContext(PostContext);
  const { images, setImages } = useContext(PostContext);
  const { description, setDescription } = useContext(PostContext);
  const { price, setPrice } = useContext(PostContext);
  const { currency, setCurrency } = useContext(PostContext);
  const { payedPer, setPayedPer } = useContext(PostContext);
  const { phoneNumber, setPhoneNumber } = useContext(PostContext);

  const data = {
    title,
    images,
    description,
    price,
    currency,
    payedPer,
    phoneNumber,
  };

  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Image Picker
  const addImages = () => {
    const options = {
      title: 'Select Image',
      type: 'library',
      selectionLimit: 0,
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        alert('Cancelled image picker');
        return;
      }
      const pictures = response.assets.map(x => {
        return {
          name: x.fileName,
          type: x.type,
          uri: Platform.OS === 'ios' ? x.uri.replace('file://', '') : x.uri,
        };
      });

      console.log(pictures);
      setImages([...images, ...pictures]);
    });
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <BackArrow />
      <PageTitle text="Post" />

      <PostField text="Add Title">
        <PostFieldTextInput
          state={[title, setTitle]}
          placeholder="ex: iPhone 8"
        />
      </PostField>

      <PostField text="Upload Images">
        <TouchableOpacity onPress={addImages}>
          <View style={PostStyles.addImagesButton}>
            <View style={PostStyles.addImagesBackgroundCircle} />
            <Icon name="pluscircleo" style={PostStyles.addImageIcon} />
            <Text style={PostStyles.addImagesText}>Add Images</Text>
          </View>
        </TouchableOpacity>
      </PostField>

      <PostField text="Add Description">
        <PostFieldTextInput
          style={{ height: 0.25 * height, textAlignVertical: 'top' }}
          state={[description, setDescription]}
          multiline={true}
          placeholder="Add the details you would like to see in a post! :)"
        />
      </PostField>

      <PostField text="Select Price" style={{ zIndex: 4 }}>
        <View
          style={{
            flexDirection: 'row',
            height: 0.1 * height,
            // backgroundColor: 'red',
          }}>
          <PostFieldTextInput
            style={{ width: 0.5 * width }}
            state={[price, setPrice]}
            keyboardType="numeric"
            placeholder="ex: 100"
          />
          <Dropdown
            style={{ width: 0.3 * width }}
            state={[currency, setCurrency]}
            options={['Lei', 'Euro', 'USD', 'GBP']}
          />
        </View>
      </PostField>

      <PostField
        text="Payed Per"
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          // backgroundColor: 'red',
          height: 0.1 * height,
          zIndex: 3,
        }}>
        <Dropdown
          style={{ width: 0.4 * width }}
          state={[payedPer, setPayedPer]}
          options={['Hour', 'Day', 'Week', 'Month']}
        />
      </PostField>

      <PostField text="Add Phone Number">
        <PostFieldTextInput
          state={[phoneNumber, setPhoneNumber]}
          keyboardType="numeric"
          placeholder="ex: 0123 456 789"
        />
      </PostField>

      <View style={PostStyles.terms}>
        <Icon name="book" style={PostStyles.termsIcon} />
        <PostFieldTitle
          text="I agree to the terms and conditions"
          style={{ fontSize: 16, marginBottom: 0 }}
        />
        <Switch state={[agreedToTerms, setAgreedToTerms]} />
      </View>

      <SubmitButton
        text="Post"
        onPress={() => {
          agreedToTerms
            ? submitPost(data)
            : alert('You must agree to the terms and conditions!');
        }}
      />
    </SafeAreaView>
  );
};

export default Post;
