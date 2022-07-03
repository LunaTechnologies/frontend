import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { colors } from '../../constants/colors';

import SwitchStyles from './SwitchStyles';

const offset = SwitchStyles.circle.left;
const initialOffset = SwitchStyles.circle.right;

interface Props {
  state: any | undefined;
}

const Switch = (props: Props) => {
  const [toggled, setToggled] = props?.state ? props.state : useState(false);
  return (
    <TouchableOpacity
      style={{
        ...SwitchStyles.container,
        backgroundColor: toggled ? colors.blue : colors.gray,
      }}
      onPress={() => {
        setToggled(!toggled);
      }}>
      <View
        style={{
          ...SwitchStyles.circle,
          left: toggled ? initialOffset : offset,
          right: toggled ? offset : initialOffset,
        }}
      />
    </TouchableOpacity>
  );
};

export default Switch;
