import React, { useContext } from 'react';
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

// Packages
import Icon from 'react-native-vector-icons/dist/AntDesign';
import * as ImagePicker from 'react-native-image-picker';

// Helpers
import { submitPost } from '../../helper/SubmitPost2';

// Contexts + Styles
import { PostContext } from '../../contexts/PostContext';
import PostStyles from './PostStyles';

const { width, height } = Dimensions.get('window');

const Post = () => {
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

  const addImages = () => {
    const options = {
      title: 'Select Image',
      type: 'library',
      options: { selectionLimit: 0 },
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

      const firstPicture = pictures[0];
      console.log(pictures);

      setImages([...images, ...pictures]);
      // console.log(pictures);
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
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <BackArrow />
      <Text style={PostStyles.title}>Post</Text>

      <PostField text="Add Title">
        <PostFieldTextInput
          state={{ value: title, setValue: setTitle }}
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
          state={{ value: description, setValue: setDescription }}
          multiline={true}
          placeholder="Add the details you would like to see in a post! :)"
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
            state={{ value: price, setValue: setPrice }}
            keyboardType="numeric"
            placeholder="ex: 100"
          />
          <Dropdown
            style={{ width: 0.3 * width }}
            state={{ selectedOption: currency, setSelectedOption: setCurrency }}
            options={['Lei', 'Euro', 'USD', 'GBP']}
          />
        </View>
      </PostField>

      <PostField
        text="Payed Per"
        style={{
          flexDirection: 'row',
          // justifyContent: 'center',
          // alignItems: 'center',
          backgroundColor: 'red',
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 0.1 * height,
            // backgroundColor: 'red',
          }}>
          <Dropdown
            style={{ width: 0.5 * width }}
            state={{ selectedOption: payedPer, setSelectedOption: setPayedPer }}
            options={['Hour', 'Day', 'Week', 'Month']}
          />
        </View>
      </PostField>

      <PostField text="Add Phone Number">
        <PostFieldTextInput
          state={{ value: phoneNumber, setValue: setPhoneNumber }}
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
        <Switch />
      </View>

      <SubmitButton
        text="Post"
        onPress={() => {
          submitPost(data);
        }}
      />
    </SafeAreaView>
  );
};

export default Post;
