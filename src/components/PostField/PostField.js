import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import PostFieldStyles from './PostFieldStyles';

const PostField = props => {
  return (
    <SafeAreaView style={PostFieldStyles.global}>
      <Text style={PostFieldStyles.text}>
        {props.text}
        {(!('optional' in props) || props.optional == 'false') && (
          <Text style={PostFieldStyles.asterisk}> *</Text>
        )}
      </Text>
      {props.children}
    </SafeAreaView>
  );
};

export default PostField;
