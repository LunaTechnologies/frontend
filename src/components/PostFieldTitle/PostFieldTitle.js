import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import PostFieldTitleStyles from './PostFieldTitleStyles';

const PostFieldTitle = props => {
  return (
    <Text
      style={{
        ...PostFieldTitleStyles.text,
        ...props.style,
      }}>
      {props.text}
      {(!('optional' in props) || props.optional == 'false') && (
        <Text style={PostFieldTitleStyles.asterisk}> *</Text>
      )}
    </Text>
  );
};

export default PostFieldTitle;
