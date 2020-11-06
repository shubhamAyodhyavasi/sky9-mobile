import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colors, gbStyle} from '../../constant';
import {DefaultTheme} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    placeholder: colors.textBase,
    label: colors.textBase,
    text: colors.textBase,
    primary: colors.labels,
  },
};
const Input = ({style, wrapperStyle, ...props}) => {
  return (
    <View style={[gbStyle.formItem, wrapperStyle]}>
      <TextInput
        style={[
          {
            backgroundColor: colors.transparant,
          },
          style,
        ]}
        underlineColor={colors.textBase}
        {...props}
      />
    </View>
  );
};

Input.defaultProps = {
  theme: theme,
  underlineColor: colors.textBase,
};

export default Input;
