import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import DropdownStyles from './DropdownStyles';

const { width, height } = Dimensions.get('window');

const Dropdown = props => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { selectedOption, setSelectedOption } = props.state;

  return (
    <SafeAreaView
      style={{
        ...DropdownStyles.container,
        ...props.style,
      }}>
      <TouchableOpacity
        style={{ height: '100%' }}
        onPress={() => {
          setToggleMenu(!toggleMenu);
        }}>
        <Text
          style={{
            ...DropdownStyles.option,
            fontSize: 20,
            borderTopLeftRadius: DropdownStyles.optionBorderRadius,
            borderTopRightRadius: DropdownStyles.optionBorderRadius,
            borderBottomLeftRadius: toggleMenu
              ? 0
              : DropdownStyles.optionBorderRadius,
            borderBottomRightRadius: toggleMenu
              ? 0
              : DropdownStyles.optionBorderRadius,
          }}>
          {selectedOption}
          {toggleMenu && <View style={DropdownStyles.borderLine}></View>}
        </Text>
      </TouchableOpacity>

      {toggleMenu &&
        // <View style={{ height: '100%' }}>
        props.options.map((value, index) => {
          const isLastOption = index == props.options.length - 1;
          return (
            <TouchableOpacity
              style={{ height: '100%' }}
              key={index}
              onPress={() => {
                setSelectedOption(value);
                setToggleMenu(!toggleMenu);
              }}>
              <Text
                style={{
                  ...DropdownStyles.option,

                  borderBottomLeftRadius: isLastOption
                    ? DropdownStyles.optionBorderRadius
                    : 0,
                  borderBottomRightRadius: isLastOption
                    ? DropdownStyles.optionBorderRadius
                    : 0,
                }}>
                {value}
              </Text>
              {!isLastOption && <View style={DropdownStyles.borderLine}></View>}
            </TouchableOpacity>
          );
        })}
      {/* </View> */}
    </SafeAreaView>
  );
};

export default Dropdown;
