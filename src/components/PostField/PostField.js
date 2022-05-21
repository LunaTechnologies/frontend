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
      {/* <PostFieldTitle style={{ fontSize: props.fontSize }}></PostFieldTitle> */}
      <PostFieldTitle text={props.text}></PostFieldTitle>

      <View
        style={{
          width: '100%',
          // backgroundColor: 'red',
          flexDirection:
            'flexDirection' in props ? props.flexDirection : 'column',
          justifyContent: 'space-around',
          zIndex: 1,
        }}>
        {props.children}
      </View>
    </SafeAreaView>
  );
};

export default PostField;
