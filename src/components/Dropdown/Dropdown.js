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
  const [selectedOption, setSelectedOption] = useState(props.options[0]);
  return (
    <SafeAreaView style={{ width: props.width * width }}>
      <View style={DropdownStyles.container}>
        <TouchableOpacity
          onPress={() => {
            setToggleMenu(!toggleMenu);
          }}>
          <Text style={{ ...DropdownStyles.option, fontSize: 20 }}>
            {selectedOption}
          </Text>
          {toggleMenu && <View style={DropdownStyles.borderLine}></View>}
        </TouchableOpacity>

        <View style={DropdownStyles.optionsContainer}>
          {toggleMenu && (
            <View style={DropdownStyles.optionsList}>
              {props.options.map((value, index) => {
                return (
                  <View key={index}>
                    <TouchableOpacity
                      onPress={() => {
                        setSelectedOption(value);
                        setToggleMenu(!toggleMenu);
                      }}>
                      <Text style={DropdownStyles.option}>{value}</Text>
                    </TouchableOpacity>
                    <View style={DropdownStyles.borderLine}></View>
                  </View>
                );
              })}
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dropdown;
