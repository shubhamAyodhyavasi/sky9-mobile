import React from 'react';
import {View, Text} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const FooterBtn = ({label}) => {
  return (
    <Pressable>
      <View
        style={{
          padding: 5,
          height: 50,
          backgroundColor: 'pink',
        }}>
        <Text style={{color: 'white'}}>{label}</Text>
      </View>
    </Pressable>
  );
};

const Footer = () => {
  return (
    <View
      style={{
        // flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 50,
      }}>
      <FooterBtn label="Home" />
      <FooterBtn label="Search" />
      <FooterBtn label="Ticket" />
      <FooterBtn label="Live" />
      <FooterBtn label="Profile" />
    </View>
  );
};

export default Footer;
