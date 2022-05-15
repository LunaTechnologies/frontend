import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import PostFieldTextInputStyles from './PostFieldTextInputStyles';

const {width, height} = Dimensions.get('window');

const PostFieldTextInput = props => {
  const [value, setValue] = useState('');
  //   useEffect(() => {
  //     console.log(value);
  //   }, [value]);
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <TextInput
          style={{
            ...PostFieldTextInputStyles.textInput,
            // width: parseFloat(props.width) * width,
            // width: parseFloat(props.width),
            width:
              'width' in props
                ? parseFloat(props.width) * width
                : PostFieldTextInputStyles.textInput.width,
            height:
              'height' in props
                ? parseFloat(props.height) * height
                : PostFieldTextInputStyles.textInput.height,
            textAlignVertical:
              'textAlignVertical' in props ? props.textAlignVertical : 'center',
          }}
          multiline={
            !('multiline' in props) || props.multiline == false ? false : true
          }
          value={value}
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
