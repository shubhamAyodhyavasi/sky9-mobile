import React from 'react';
import {View, TextInput} from 'react-native';
// import {TextInput} from 'react-native-paper';
import {colors, gbStyle} from '../../constant';

const SearchBox = () => {
  return (
    <View style={gbStyle.searchBoxWrapper}>
      <TextInput
        placeholder="Search"
        placeholderTextColor="white"
        style={[gbStyle.searchBox]}
      />
    </View>
  );
};

export default SearchBox;
