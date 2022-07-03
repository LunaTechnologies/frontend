import React from 'react';
import { Text } from 'react-native';
import PostFieldTitleStyles from './PostFieldTitleStyles';

interface Props {
  text: string;
  style: any;
  optional: string | boolean;
}

const PostFieldTitle = (props: Props) => {
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
