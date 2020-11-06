import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, Pressable, StyleSheet, Alert} from 'react-native';
import { config } from '../../constant';

const MovieThumb = ({movie, height, width}) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('MovieDetail', {movie});
    // Alert.alert('title', movie.title);
  };
  return (
    <Pressable onPress={onPress}>
      <View style={styles.wrapper}>
        <Image
          style={[
            styles.image,
            {
              height,
              width,
            },
          ]}
          source={{
            uri: config.IMG_URL + movie.image,
          }}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
  },
  wrapper: {
    padding: 5,
  },
});

MovieThumb.defaultProps = {
  height: 150,
  width: 100,
};

export default MovieThumb;
