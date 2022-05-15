import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
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
        <PostFieldTextInput></PostFieldTextInput>
      </PostField>

      <PostField text="Upload Images">
        <Button title="Add Images" style={PostStyles.addImages}></Button>
      </PostField>
    </SafeAreaView>
  );
};

export default Post;
