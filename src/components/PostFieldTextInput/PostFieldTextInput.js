import React, { useState, useEffect, useContext } from 'react';
import {
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import PostFieldTextInputStyles from './PostFieldTextInputStyles';
import PostContext from '../../contexts/PostContext';

const { width, height } = Dimensions.get('window');

const PostFieldTextInput = props => {
  const { value, setValue } = props.state;

  return (
    <SafeAreaView>
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
          placeholder={props.placeholder}></TextInput>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default PostFieldTextInput;
