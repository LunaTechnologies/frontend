import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import PostFieldStyles from './PostFieldStyles';

const PostField = props => {
  return (
    <SafeAreaView style={{ ...PostFieldStyles.global, height: props.height }}>
      <Text
        style={{
          ...PostFieldStyles.text,
          fontSize:
            'fontSize' in props
              ? props.fontSize
              : PostFieldStyles.text.fontSize,
        }}>
        {props.text}
        {(!('optional' in props) || props.optional == 'false') && (
          <Text style={PostFieldStyles.asterisk}> *</Text>
        )}
      </Text>
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
