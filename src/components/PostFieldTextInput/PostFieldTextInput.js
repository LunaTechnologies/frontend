import React, {useState, useEffect} from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import PostFieldTextInputStyles from './PostFieldTextInputStyles';
const PostFieldTextInput = () => {
  const [value, setValue] = useState('');
  //   useEffect(() => {
  //     console.log(value);
  //   }, [value]);
  return (
    <SafeAreaView>
      <TextInput
        style={PostFieldTextInputStyles.textInput}
        value={value}
        onChangeText={setValue}
        placeholder="ex: iPhone 8"></TextInput>
    </SafeAreaView>
  );
};

export default PostFieldTextInput;
