import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import PostFieldTitle from '../PostFieldTitle/PostFieldTitle';
import PostFieldStyles from './PostFieldStyles';

const PostField = props => {
  return (
    <SafeAreaView
      style={{
        ...PostFieldStyles.global,
        ...props.style,
      }}>
      <PostFieldTitle text={props.text} />

      <View
        style={{
          ...PostFieldStyles.children,
          ...props.style,
        }}>
        {props.children}
      </View>
    </SafeAreaView>
  );
};

export default PostField;
