import React, { useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PostStyles from './PostStyles';
import Icon from 'react-native-vector-icons/dist/AntDesign';

import BackArrow from '../../components/BackArrow/BackArrow';
import PostField from '../../components/PostField/PostField';
import PostFieldTitle from '../../components/PostFieldTitle/PostFieldTitle';
import PostFieldTextInput from '../../components/PostFieldTextInput/PostFieldTextInput';
import { PostContext, PostProvider } from '../../contexts/PostContext';
import Dropdown from '../../components/Dropdown/Dropdown';
import Switch from '../../components/Switch/Switch';
import SubmitButton from '../../components/SubmitButton/SubmitButton';

import * as ImagePicker from 'react-native-image-picker';

const { width, height } = Dimensions.get('window');

const Post = () => {
  const { title, setTitle } = useContext(PostContext);
  const { images, setImages } = useContext(PostContext);
  const { description, setDescription } = useContext(PostContext);
  const { price, setPrice } = useContext(PostContext);
  const { currency, setCurrency } = useContext(PostContext);
  const { payedPer, setPayedPer } = useContext(PostContext);
  const { phoneNumber, setPhoneNumber } = useContext(PostContext);

  const addImages = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Add Image Response: ', response);
      setImages(response);
    });
  };

  const post = () => {
    /*
{"title": "string","description":"string","phoneNumber": "string","price": 0,"username": "string","servType": "string","pictures": [{"path": "string"}]}

    */
    // console.log('Posted!');
    console.log(title);
    console.log(images);
    console.log(description);
    console.log(price);
    console.log(currency);
    console.log(payedPer);
    console.log(phoneNumber);
  };

  return (
    <PostProvider>
      <BackArrow />
      <Text style={PostStyles.title}>Post</Text>

      <PostField text="Add Title">
        <PostFieldTextInput
          placeholder="ex: iPhone 8"
          state={{ value: title, setValue: setTitle }}
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
          multiline={true}
          placeholder="Add the details you would like to see in a post! :)"
          state={{ value: description, setValue: setDescription }}
        />
      </PostField>

      <PostField text="Select Price">
        <View
          style={{
            flexDirection: 'row',
            height: 0.1 * height,
            // backgroundColor: 'red',
          }}>
          <PostFieldTextInput
            style={{ width: 0.5 * width }}
            keyboardType="numeric"
            placeholder="ex: 100"
            state={{ value: price, setValue: setPrice }}
          />
          <Dropdown
            width={0.3}
            options={['Lei', 'Euro', 'USD', 'GBP']}
            state={{ selectedOption: currency, setSelectedOption: setCurrency }}
          />
        </View>
      </PostField>

      <PostField text="Payed Per" flexDirection="row">
        <View
          style={{
            flexDirection: 'row',
            height: 0.1 * height,
            // backgroundColor: 'red',
          }}>
          <Dropdown
            width={0.5}
            options={['Hour', 'Day', 'Week', 'Month']}
            // defaultOption="Day"
            state={{ selectedOption: payedPer, setSelectedOption: setPayedPer }}
          />
        </View>
      </PostField>

      <PostField text="Add Phone Number">
        <PostFieldTextInput
          keyboardType="numeric"
          placeholder="ex: 0123 456 789"
          state={{ value: phoneNumber, setValue: setPhoneNumber }}
        />
      </PostField>

      <View style={PostStyles.terms}>
        <Icon name="book" style={{ ...PostStyles.termsIcon }} />
        <PostFieldTitle
          text="I agree to the terms and conditions"
          style={{ fontSize: 16, marginBottom: 0 }}
        />
        <Switch />
      </View>

      <SubmitButton text="Post" onPress={post} />
    </PostProvider>
  );
};

export default Post;
