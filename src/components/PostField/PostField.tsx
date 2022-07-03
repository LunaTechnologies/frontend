import React from 'react';
import { SafeAreaView, View } from 'react-native';
import PostFieldTitle from '../PostFieldTitle/PostFieldTitle';
import PostFieldStyles from './PostFieldStyles';

interface Props {
  text: string;
  children: any;
  style: any;
}

const PostField = (props: Props) => {
  return (
    <SafeAreaView
      style={{
        ...PostFieldStyles.global,
        ...props.style,
      }}>
      <PostFieldTitle text={props.text} />

      <View>{props.children}</View>
    </SafeAreaView>
  );
};

export default PostField;
