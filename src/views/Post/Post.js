import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import PostStyles from './PostStyles';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import BackArrow from '../../components/BackArrow/BackArrow';
import PostField from '../../components/PostField/PostField';
import PostFieldTextInput from '../../components/PostFieldTextInput/PostFieldTextInput';
import Dropdown from '../../components/Dropdown/Dropdown';
import * as ImagePicker from 'react-native-image-picker';

const Post = () => {
  const addImages = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Add Image Response: ', response);
    });
  };

  return (
    <SafeAreaView>
      <BackArrow />
      <Text style={PostStyles.title}>Post</Text>

      <PostField text="Add Title">
        <PostFieldTextInput placeholder="ex: iPhone 8" />
      </PostField>

      <PostField text="Upload Images">
        <TouchableOpacity onPress={addImages}>
          <View style={PostStyles.addImagesButton}>
            <View style={PostStyles.addImagesBackgroundCircle}></View>
            <Icon name="pluscircleo" style={PostStyles.addImageIcon}></Icon>
            <Text style={PostStyles.addImagesText}>Add Images</Text>
          </View>
        </TouchableOpacity>
      </PostField>

      <PostField text="Add Description">
        <PostFieldTextInput
          height="0.25"
          textAlignVertical="top"
          multiline={true}
          placeholder="Add the details you would like to see in a post! :)"
        />
      </PostField>

      <PostField text="Select Price">
        <PostFieldTextInput
          width="0.5"
          keyboardType="numeric"
          placeholder="ex: 100"
        />
        <Dropdown width={0.3} options={['Lei', 'Euro', 'USD', 'GBP']} />
      </PostField>

      <PostField text="Add Phone Number">
        <PostFieldTextInput
          keyboardType="numeric"
          placeholder="ex: 0123 456 789"
        />
      </PostField>
    </SafeAreaView>
  );
};

export default Post;
