import React from 'react';
import {View, Image, Pressable, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {colors, gbStyle} from '../../constant';
import logo from '../../assets/logo.png';
import SearchBox from '../SearchBox';

const Header = ({back, search}) => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={[colors.theme, colors.dark]}
      style={gbStyle.headerGradient}>
      <View style={gbStyle.header}>
        <View style={gbStyle.headerBtn}>
          {back && (
            <Pressable onPress={() => navigation.goBack()}>
              <Icon name="left" size={20} color={colors.textBase} />
            </Pressable>
          )}
        </View>
        {search ? (
          <SearchBox />
        ) : (
          <Image source={logo} style={gbStyle.headerLogo} />
        )}

        <View style={gbStyle.headerBtn} />
      </View>
    </LinearGradient>
  );
};

export default Header;
