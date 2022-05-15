import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import PostStyles from './PostStyles';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import BackArrow from '../../components/BackArrow/BackArrow';
import PostField from '../../components/PostField/PostField';
import PostFieldTextInput from '../../components/PostFieldTextInput/PostFieldTextInput';

const Post = () => {
  return (
    <SafeAreaView>
      <BackArrow />
      <Text style={PostStyles.title}>Post</Text>

      <PostField text="Add Title">
        <PostFieldTextInput placeholder="ex: iPhone 8"></PostFieldTextInput>
      </PostField>

      <PostField text="Upload Images">
        <TouchableOpacity>
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
          placeholder="Add the details you would like to see in a post! :)"></PostFieldTextInput>
      </PostField>

      <PostField text="Select Price">
        <PostFieldTextInput
          width="0.5"
          keyboardType="numeric"
          placeholder="ex: 100"></PostFieldTextInput>
      </PostField>

      <PostField text="Add Phone Number">
        <PostFieldTextInput
          keyboardType="numeric"
          placeholder="ex: 0123 456 789"></PostFieldTextInput>
      </PostField>
    </SafeAreaView>
  );
};

export default Post;
