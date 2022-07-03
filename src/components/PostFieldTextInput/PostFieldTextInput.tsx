import React from 'react';
import { TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import PostFieldTextInputStyles from './PostFieldTextInputStyles';
import { colors } from '../../constants/colors';

interface Props {
  state: any;
  style: any;
  multiline: boolean | undefined;
  keyboardType: string;
  placeholder: string;
}

const PostFieldTextInput = (props: Props) => {
  const [value, setValue] = props.state;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <TextInput
        style={{
          ...PostFieldTextInputStyles.textInput,
          ...props.style,
        }}
        multiline={
          !('multiline' in props) || props.multiline == false ? false : true
        }
        value={value.toString()}
        onChangeText={setValue}
        keyboardType={
          !('keyboardType' in props) || props.keyboardType != 'numeric'
            ? 'default'
            : 'numeric'
        }
        placeholder={props.placeholder}
        placeholderTextColor={colors.darkGray}></TextInput>
    </TouchableWithoutFeedback>
  );
};

export default PostFieldTextInput;
