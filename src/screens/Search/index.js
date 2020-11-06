import React from 'react';
import {View, Text} from 'react-native';
import {Header} from '../../components';
import {gbStyle} from '../../constant';

const SearchScreen = () => {
  return (
    <>
      <Header search back />
      <View style={gbStyle.body} />
    </>
  );
};

export default SearchScreen;
